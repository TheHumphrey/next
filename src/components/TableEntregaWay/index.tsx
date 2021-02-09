import React, { ReactElement, useEffect, useState } from 'react';

import { connect, DispatchProp } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '@app/store/ducks/actions/configTable';
import { sortTable, setIconHeader } from '@app/services/Sorting';
import { pagination } from '@app/services/Pagination';
import { getHeaderTable } from '@app/services/HeaderTable';
import api from '@app/services/Api';

import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import { TableHeader, TableBody, TableFooter } from '@app/components';

import { HeaderTable, BodyData } from '@app/interfaces/TableData';
import { ConfigTable } from '@app/interfaces/TableFilter';

import TableEntregaWayStyle from './style';

interface Props {
  configTable: ConfigTable;
  toogleConfigFormat(isChecked: boolean): void;
}

const TableEntregaWay = ({ configTable, toogleConfigFormat }: Props): ReactElement => {
  const [data, setData] = useState<BodyData[]>();
  const [bodyData, setBodyData] = useState<BodyData[]>();
  const [header, setHeader] = useState<HeaderTable>();
  const [ascOrDesc, setAscOrDesc] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    paginationTable(1, configTable.linesPerPage);
  }, [configTable]);

  useEffect(() => {
    createHeader();
    api.get('/ativo').then((res) => {
      if (res.statusText == 'OK') {
        setData(res.data);
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    paginationTable(1, configTable.linesPerPage);
  }, [isLoading]);

  const createHeader = (): void => {
    const headerTable = getHeaderTable();
    setHeader(headerTable);
  };

  const paginationTable = (index: number, linesLimit: number, newArray?: BodyData[]) => {
    if (data && newArray == undefined) {
      const newData = pagination(index, linesLimit, data);
      setBodyData(newData);
    }
    if (newArray) {
      const newData = pagination(index, linesLimit, newArray);
      setBodyData(newData);
    }
  };

  useEffect(() => {
    if (data) {
      const newArrayData = data.filter(
        (item) =>
          item.ativo.toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()) ||
          item.aderencia.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()) ||
          item.dispositivo.bateria.toString().includes(filter.toString()) ||
          item.temperatura.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()) ||
          item.trajeto.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()) ||
          item.umidade.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()),
      );
      paginationTable(1, configTable.linesPerPage, newArrayData);
    }
  }, [filter]);

  const handleGetTableData = (): void => {
    api.get('/ativo').then((res) => {
      if (res.statusText == 'OK') {
        setData(res.data);
      }
    });
  };

  const sort = (props: string, title: string): void => {
    if (data && header) {
      const sortedData = sortTable(data, props, ascOrDesc);
      setData(sortedData);
      paginationTable(1, configTable.linesPerPage);

      const newIconState = setIconHeader(header, ascOrDesc, title);
      setHeader(newIconState);

      setAscOrDesc(!ascOrDesc);
    }
  };

  const handleFormat = (): void => {
    const isChecked = !configTable.formatTable;
    toogleConfigFormat(isChecked);
  };

  return (
    <>
      <TableEntregaWayStyle>
        <Table className="tableCustom" responsive="md" striped hover size={configTable.formatTable ? 'sm' : ''}>
          <thead>
            <tr className="titleTable">
              {header
                ? header.map((item, index) => <TableHeader key={index} data={item} i={index} sort={sort} />)
                : null}
            </tr>
          </thead>
          <tbody>
            {/* {isLoading ? (
              <tr className="loadingSpinner">
                <td colSpan={100}>
                  <Spinner animation="border" role="status"></Spinner>
                </td>
              </tr>
            ) : bodyData ? (
              bodyData.map((item, index) => <TableBody key={index} filter={configTable.filter} data={item} />)
            ) : null} */}
            {isLoading ? (
              <tr className="loadingSpinner">
                <td colSpan={100}>
                  <Spinner animation="border" role="status"></Spinner>
                </td>
              </tr>
            ) : bodyData && data ? (
              bodyData
                .filter(
                  (item) =>
                    item.ativo.toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()) ||
                    item.aderencia.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()) ||
                    item.dispositivo.bateria
                      .toString()
                      .toLocaleLowerCase()
                      .includes(filter.toString().toLocaleLowerCase()) ||
                    item.temperatura.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()) ||
                    item.trajeto.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()) ||
                    item.umidade.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()),
                )
                .map((item, index) => <TableBody key={index} filter={configTable.filter} data={item} />)
            ) : null}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={100} className="footerTable">
                {data ? (
                  <TableFooter
                    numberPerPage={configTable.linesPerPage}
                    lengthData={data.length}
                    pag={paginationTable}
                  />
                ) : (
                  <TableFooter numberPerPage={configTable.linesPerPage} lengthData={1} pag={paginationTable} />
                )}
              </td>
            </tr>
          </tfoot>
        </Table>
      </TableEntregaWayStyle>
    </>
  );
};

const mapStateToProps = (state: any) => ({ configTable: state.configTable });

const mapDispatchToProps = (dispatch: DispatchProp) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableEntregaWay);
