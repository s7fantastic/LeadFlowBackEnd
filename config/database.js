export const getMongodbUrl = (status)=>{
    if (status === false) {
        return "mongodb://127.0.0.1:27017/leadDB"
        // return "mongodb+srv://s7fantastic:RPds0700X3Cq1ekP@cluster0.ljb0e.mongodb.net/leadDB?retryWrites=true&w=majority&appName=Cluster0"

    }
    else {
        return "mongodb+srv://s7fantastic:RPds0700X3Cq1ekP@cluster0.ljb0e.mongodb.net/leadDB?retryWrites=true&w=majority&appName=Cluster0"
    }
}

