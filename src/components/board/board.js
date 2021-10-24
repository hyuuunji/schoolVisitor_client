import React,{Fragment,useState} from "react";
import {Select,FormControl,InputLabel,MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./board.css"
import {Region,School} from "../../util/dropbox"


const Board=()=>{

    const [region,setRegion] = useState("")
    const [search,setSearch] = useState("")

    const handleChange = (e) => {
        setRegion(e.target.value);
      };

   const onKeypress=(e)=>{
    if(e.key==="Enter") {onClick();}
   }

   const onClick=()=>{
    setSearch(search)
   }


    return(
        <div className="board_container">
            <div className="board_wrap">
                <div className="board_search_wrap">
                    {/* 드롭박스 */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-controlled-open-select-label">지역</InputLabel>
                        <Select
                            value={region}
                            onChange={handleChange}
                        >
                        { Region.region.map(({name})=>{
                                return(                       
                                    <MenuItem  key={name} value={name}>{name}</MenuItem>
                                    )
                        }) } 
                        </Select> 
                    </FormControl>
                    {/* 검색창 */}
                    <input 
                        className="board_search"
                        name="Search"
                        placeholder="SEARCH"
                        onChange={(e)=>setSearch(e.target.value)}
                            />
                    <div id="search-btn" onClick={()=>onClick()}>검색</div>
                </div>

            <div className="board_content_wrap">
                <div className="board_title_wrap">
                        <strong className="board_title_name">학교명</strong>
                        <strong className="board_title_check">방문여부</strong>
                </div>
                { School.school.map(({name,check,index})=>{
                                return(                     
                                    <Fragment key={index}>
                                        <div className="board_content">
                                                <strong className="board_content_name">{name}</strong>
                                                <strong className="board_content_check">
                                                    {check}</strong>
                                        </div>
                                    </Fragment>  
                                  
                                    )
                        }) } 
            </div>

            </div>
        </div>
    )

}

export default Board;
