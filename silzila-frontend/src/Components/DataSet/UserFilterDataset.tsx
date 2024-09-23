//this component is used for datasetFilter coulmn in Right side of canvas table

import { connect } from "react-redux";
import { UserFilterDatasetProps } from "./UserFilterDatasetInterfaces";
import { isLoggedProps } from "../../redux/UserInfo/IsLoggedInterfaces";
import { DataSetStateProps } from "../../redux/DataSet/DatasetStateInterfaces";
import FilterElement from "./FilterElement";

const UserFilterDataset = ({
  //props
  editMode,
  flatFileId,
  // list of tables selected by user for dataset
  tables,
  dbConnectionId,
  // list of fliters addedby user for dataset
  filters,
  setDataSetFilterArray,
}: UserFilterDatasetProps) => {
  // console.log("dataSetFilterArray", dataSetFilterArray);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "25px" }}
    >
      {filters && filters.length > 0 &&
        filters.map((filter) => {
          console.log("filter item user filter",flatFileId)
          return ((
            <FilterElement
              key={filter.uid}
              filter={filter}
              flatFileId={flatFileId}
              dbConnectionId={dbConnectionId}
              editMode={editMode}
              setDataSetFilterArray={setDataSetFilterArray}
            />
          ))
        })}
    </div>
  );
};

const mapStateToProps = (state: isLoggedProps & DataSetStateProps) => {
  return {
    token: state.isLogged.accessToken,
    schema: state.dataSetState.schema,
    dbName: state.dataSetState.databaseName,
    datasetName: state.dataSetState.datasetName,
    tables: state.dataSetState.tempTable,
  };
};


export default connect(mapStateToProps, null)(UserFilterDataset);
