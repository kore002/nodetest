import React, {useEffect, useState} from "react";
import axios from "axios";
function BoardList() {
    const [BD_TITLE, setBD_TITLE] = useState('');
    const [BD_ID, setBD_ID] = useState('');
    const [BD_LIST, setBD_LIST] = useState([]);
    const [token, setToken] = useState(false);
    const callApi = async()=>{
      axios.get("/api/v1/boardlist").then((res)=>{
        console.log(res.data)
        setBD_LIST(res.data);
      });
     
    };
    // const loadApi = async(a, b) => {
    //   axios.post("api/upload", {
    //     username : a,
    //     password : b
    //   })
    //   setName('');
    //   setPassword('');
    //   setFFF(!fff);
    // }
    useEffect(()=>{
      callApi();
    }, [token]);
    
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <td>NO</td>
              <td>Title</td>
              <td>ID</td>
            </tr>
          </thead>
          <tbody>
            {
              BD_LIST.length > 0 ?
              BD_LIST.map((data,index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.BD_TI}</td>
                    <td>{data.BD_ID}</td>
                  </tr>
                ))
              : null
            }
          </tbody>
  
  
  
  
        </table>
      </div>
  
    );
  }
  
  export default BoardList;