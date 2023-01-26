import React from 'react'
import { Search } from "@mui/icons-material";
import cls from "./Searchbar.module.css";

const SearchBar = () => {
  return (
      <div className={cls["searchbar"]}>
          <Search sx={{ fontSize: "20px", color: "#ccc" }} /> 
          <span>Search here...</span>
      </div>
  )
}

export default SearchBar