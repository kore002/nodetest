import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';

function SampleTest() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [abc, setABC] = useState([]);
  const [fff, setFFF] = useState(false);
  const callApi = async()=>{
    axios.get("/api").then((res)=>{
      console.log(res.data)
      setABC(res.data);
    });
   
  };
  const loadApi = async(a, b) => {
    axios.post("api/upload", {
      username : a,
      password : b
    })
    setName('');
    setPassword('');
    setFFF(!fff);
  }
  useEffect(()=>{
    callApi();
  }, [fff]);
  
  return (
    <div className="App">
      <input type="text" value={name} onChange={({target : {value}}) => setName(value)}></input>
      <input type="text" value={password} onChange={({target : {value}}) => setPassword(value)}></input>
      <button onClick={() => loadApi(name, password)}>go</button>

      <table>
        <thead>
          <tr>
            <td>index</td>
            <td>name</td>
            <td>text</td>
          </tr>
        </thead>
        <tbody>
          {
            abc.length > 0 ?
              abc.map((data,index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{data.username}</td>
                  <td>{data.password}</td>
                </tr>
              ))
            : null
          }
        </tbody>




      </table>
    </div>

  );
}

export default SampleTest;