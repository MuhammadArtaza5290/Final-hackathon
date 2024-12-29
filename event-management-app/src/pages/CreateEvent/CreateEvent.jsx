import { useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Navbar from "../../components/Navbar/Navbar";

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

    const createEventHandler = () => {
        let event ={
            title,
            description,
            location,
            category,
        }
        console.log(event);
        setTitle('');
        setDescription('');
        setLocation('');
        setCategory('');
    };
  return (
    <>
    <Navbar/>
      <div style={{ display: "flex", flexDirection: "column", alignItems:'center', justifyContent:'center', lineHeight:'70px' }}>
        <h1 style={{ fontSize:'40px', fontWeight:'600' }}>Create New Event</h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems:'center', justifyContent:'center' }}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e)=> setDescription(e.target.value)}
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            onChange={(e)=> setLocation(e.target.value)}
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            onChange={(e)=> setCategory(e.target.value)}
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
          />
        </div>
        <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', fontWeight: '600', cursor: 'pointer',border: 1 }} onClick={createEventHandler}>
          Create Event
        </button>
      </div>
    </>
  );
};

export default CreateEvent;
