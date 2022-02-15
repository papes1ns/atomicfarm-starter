import React, {useState} from "react";
import {useTable} from "react-table";
import {BsFillCloudCheckFill} from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai";

export const Table: React.FC = () => {
  interface TableObject {
    col1: string;
    col2: string;
  }

  const data = React.useMemo(
    () => [
      {
        col0: "Saved",
        col1: "Alkalinity",
        col2: "YSI Colorimeter",
        col3: "Tank 1",
        col4: "34 mg/L",
        col5: "02/15/22 at 12:00pm",
        col6: "ML",
      },
      {
        col0: "Unsaved",
        col1: "Nitrite",
        col2: "AquaMate 8100 Spectrophotometer",
        col3: "Tank 1",
        col4: "75 mg/L",
        col5: "02/15/22 at 12:00pm",
        col6: "ML",
      },
      {
        col0: "Unsaved",
        col1: "Free Chlorine",
        col2: "YSI Colorimeter",
        col3: "Tank 2",
        col4: "60 mg/L",
        col5: "02/15/22 at 12:00pm",
        col6: "ML",
      },
      {
        col0: "Unsaved",
        col1: "Choose",
        col2: "Choose",
        col3: "-",
        col4: "-",
        col5: "-",
        col6: "-",
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "col0" as keyof TableObject, // accessor is the "key" in the data
        Cell: (value: any) => {
          return (
            <div
              className={
                "font-normal text-black w-9 items-center justify-center flex"
              }
            >
              {value.row.values.col0 === "Saved" ? (
                <BsFillCloudCheckFill
                  size={22}
                  color={"#26B2CB"}
                ></BsFillCloudCheckFill>
              ) : (
                <BsFillCloudCheckFill
                  size={22}
                  color={"#DEDFE0"}
                ></BsFillCloudCheckFill>
              )}
            </div>
          );
        },
      },
      {
        Header: "Measurement Type",
        accessor: "col1" as keyof TableObject, // accessor is the "key" in the data
        Cell: (value: any) => {
          return (
            <div className={"flex-row flex justify-center items-center"}>
              {/* {value.row.values.col1 === "Choose" ? (
                <div className={"font-normal text-black opacity-40 w-44"}>
                  {value.row.values.col1}
                </div>
              ) : (
                <div className={"font-normal text-black w-44"}>
                  {value.row.values.col1}
                </div>
              )}
              <AiFillCaretDown size={12}></AiFillCaretDown> */}
              <select
                className={"w-44 h-12 bg-transparent"}
                name="selectList"
                id="selectList"
              >
                <option value="option 1">Air Flow</option>
                <option value="option 2">Alkalinity</option>
                <option value="option 3">Boron</option>
                <option value="option 4">Calcium</option>
                <option value="option 5">Dissolved Oxygen (DO)</option>
                <option value="option 6">DO Saturation</option>
                <option value="option 7">EC</option>
                <option value="option 8">Iron</option>
                <option value="option 9">Magnesium</option>
                <option value="option 10">Manganese</option>
                <option value="option 11">Nitrate</option>
                <option value="option 12">Nitrate Nitrogen</option>
                <option value="option 13">pH</option>
                <option value="option 14">Potassium</option>
                <option value="option 15">Salinity</option>
                <option value="option 16">Sulfate</option>
                <option value="option 17">Temperature</option>
                <option value="option 18">Total Ammonia Nitrogen (TAN)</option>
              </select>
            </div>
          );
        },
      },
      {
        Header: "Method",
        accessor: "col2" as keyof TableObject,
        Cell: (value: any) => {
          return (
            <div className={"flex-row flex justify-center items-center"}>
              {/* {value.row.values.col2 === "Choose" ? (
                <div className={"w-60 opacity-40"}>{value.row.values.col2}</div>
              ) : (
                <div className={"w-60"}>{value.row.values.col2}</div>
              )}
              <AiFillCaretDown size={12}></AiFillCaretDown> */}
              <select
                className={"w-60 h-12 bg-transparent break-normal"}
                name="selectList"
                id="selectList"
              >
                <option value="option 1">
                  AquaMate 8100 Spectrophotometer
                </option>
                <option value="option 2">Refractometer</option>
                <option value="option 3">YSI Colorimeter</option>
                <option value="option 4">YSI ODO Meter (Handheld)</option>
                <option value="option 5">YSI pH Pen (Handheld)</option>
                <option value="option 6">YSI Meter (Handheld)</option>
                <option value="option 7">YSI Colorimeter</option>
                <option value="option 8">
                  Horiba Handheld pen, AquaMate 8100 Spectrophotometer
                </option>
                <option value="option 9">formula from Horiba pen</option>
                <option value="option 10">
                  Horiba Handheld pen, or Manual Data Entry from External Lab,
                  YSI Colorimeter
                </option>
                <option value="option 11">
                  Manual Data Entry from External Lab, YSI Colorimeter
                </option>
                <option value="option 12">Nitrate Nitrogen</option>
              </select>
            </div>
          );
        },
      },
      {
        Header: "Location",
        accessor: "col3" as keyof TableObject, // accessor is the "key" in the data
        Cell: (value: any) => {
          return <div className={"w-28"}>{value.row.values.col3}</div>;
        },
      },
      {
        Header: "Value",
        accessor: "col4" as keyof TableObject, // accessor is the "key" in the data
        Cell: (value: any) => {
          return (
            <form className={"w-28"}>
              {/* <input
                className={"border-2 mx-2 rounded w-24"}
                type="text"
                name="name"
              /> */}
              <label>{value.row.values.col4}</label>
            </form>
          );
        },
      },
      {
        Header: "Date & Time",
        accessor: "col5" as keyof TableObject, // accessor is the "key" in the data
        Cell: (value: any) => {
          return <div className={"w-44"}>{value.row.values.col5}</div>;
        },
      },
      {
        Header: "Operator",
        accessor: "col6" as keyof TableObject, // accessor is the "key" in the data
        Cell: (value: any) => {
          return <div className={"w-28"}>{value.row.values.col6}</div>;
        },
      },
    ],
    [],
  );

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({columns, data});

  return (
    <div
      {...getTableProps()}
      style={{
        border: "2px solid rgba(0, 0, 0, 0.00)",
        borderRadius: "8px",
      }}
    >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: "#F7F7F7",
                  color: "#929396",
                  fontWeight: "bold",
                  paddingRight: 12,
                  paddingLeft: 10,
                  paddingTop: 12,
                  paddingBottom: 12,
                  textAlign: "left",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                if (Number(row.id) % 2 === 0) {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.06)",
                        background: "#FFFFFF",
                        color: "#606164",
                      }}
                      className={"font-light"}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                }
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      background: "#F7F7F7",
                      color: "#606164",
                    }}
                    className={"font-light"}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};
