import React from "react";
import HeartFill from "react-bootstrap-icons/dist/icons/heart-fill";
import Heart from "react-bootstrap-icons/dist/icons/heart";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addtofavourites, remove } from "../actions/action";
import { songclick } from "../actions/SongClickAction";

const SongCard = (props) => {
  const dispatch = useDispatch();

  const favourite = useSelector((state) => state.reducer);
  const selectedsong = useSelector((state) => state.songclick);
  console.log(selectedsong);

  const songs = favourite.find((x) => x.title === props.song.title);

  return (
    <div
      className="py-3 trackHover"
      onClick={() => dispatch(songclick(props.song))}
    >
      {songs ? (
        <Button onClick={() => dispatch(remove(props.song))}>
          <HeartFill />
        </Button>
      ) : (
        <Button onClick={() => dispatch(addtofavourites(props.song))}>
          <Heart />
        </Button>
      )}
      <a
        className="card-title trackHover px-3"
        style={{ color: "white" }}
        onClick={() => dispatch(songclick(props.song))}
      >
        {props.song.title}
      </a>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(props.song.duration) / 60)}:
        {parseInt(props.song.duration) % 60 < 10
          ? "0" + (parseInt(props.song.duration) % 60)
          : parseInt(props.song.duration) % 60}
      </small>
    </div>
  );
};

export default SongCard;
