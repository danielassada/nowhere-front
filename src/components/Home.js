import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default () => {
  return (
    <div>
      <div id="content">
        <div valign="top" className="columns">
          <div className="itemcontent ha">
            <h2>Link internos</h2>
            <p className="details">
              <a href="http://lyricstraining.com/" className="ui violet button">
                treinar inglês
              </a>
              <a
                id="netcine"
                href="http://netcine.us/tvshows"
                title="pouco conteudo"
                className="ui violet button"
              >
                netcine
              </a>
              <a
                id="cult"
                href="http://filmescult.com.br"
                className="ui violet button"
              >
                cult
              </a>
            </p>
          </div>
        </div>

        <div valign="top" className="columns">
          <div className="itemcontent">
            <h2>Things</h2>
            <p className="details">
              <Link to="http://127.0.0.1:8000/note/" className="ui blue button">
                blog
              </Link>
              {/* <!-- <Link to="desenvolvimento/fle.php" title="pouco conteudo">desenvolvimento</Link> --> */}
              <Link to="/links/" className="ui blue button">
                links
              </Link>
              <Link
                to="http://127.0.0.1:8000/search_terms/"
                className="ui blue button"
              >
                search_terms
              </Link>
              <Link to="/songs" className="ui blue button">
                Songs
              </Link>
              <Link to="global/" className="ui blue button">
                global
              </Link>
              <Link
                to="http://127.0.0.1:8000/search_engine/"
                className="ui blue button"
              >
                search engines
              </Link>
              <Link to="streams/" className="ui blue button">
                streams
              </Link>

              {/* <!-- <Link to="enc/tool_enc.html">enc</Link> --> */}
              {/* <!-- <Link to="p5/initial.html">enc</Link> --> */}
              {/* <!-- <Link to="p5/sound.html">sound</Link> --> */}
            </p>
          </div>
        </div>

        <div valign="top" className="columns">
          <div className="itemcontent ha">
            <h2>jp</h2>
            <p className="details">
              <a
                id="cult"
                href="http://honyakustar.com/en/kiru"
                className="ui violet button"
              >
                honyakustar
              </a>
              <a
                id="cult"
                href="http://peterkinnaird.eu/kani/"
                className="ui violet button"
              >
                peterkinnaird
              </a>
              <a
                id="cult"
                href="#"
                className="ui violet button"
              >
                league of legends
              </a>
              <a
                id="cult"
                href="http://hexagenic.net/wanikaniwallpaper-js/"
                className="ui violet button"
              >
                hexagenic
              </a>
              <Link
                to="http://127.0.0.1:8000/wikipedia/"
                className="ui violet button"
              >
                wikipedia
              </Link>
              <Link
                to="file:///D:/texto/pdf/google2.pdf"
                className="ui violet button"
              >
                google search
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div id="content">
        <p>日</p>
        <p>月</p>
        <p>火</p>
        <p>水</p>
        <p>木</p>
        <p>金- Release date of the movie Glass</p>
        <p>土</p>
      </div>
    </div>
  );
};
