import React from "react";
import {Button} from "@nextui-org/react";
import { Link } from 'react-router-dom'
import BannerTop from './BannerTop.jsx'
export default function App() {
  return (
    <>
    <BannerTop/>
    <div className=" flex gap-10 justify-center place-items-center  ">
    <h1 className="text-lg font-bold" >Elija tipo de partido</h1>
    <Link to="/marcador">
    <Button  disableRipple
      className="bg-gradient-to-tr from-emerald-950 to-stone-500 relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg">
      3 sets
    </Button>
    </Link>
    <Link to="/pruebas">

    <Button disableRipple
      className="bg-gradient-to-tr from-amber-700 to-amber-400  relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg">
    3 sets 🟡
  </Button>
  </Link>
  <Button disableRipple
      className="bg-gradient-to-tr from-emerald-950 to-stone-500 relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg">
      <a href="#">2 sets y súper tie</a>
    </Button>
    <Button disableRipple
      className="bg-gradient-to-tr  from-amber-700 to-amber-400  relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg">
      2 sets y súper tie🟡
    </Button>
    </div>
  </>
  );
}