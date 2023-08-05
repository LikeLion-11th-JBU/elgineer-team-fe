import React from "react";
import "./header.module.css";

export default function header() {
  return (
    <div>
      <input type="text" placeholder="Search.." name="search" />
      <form>
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}
