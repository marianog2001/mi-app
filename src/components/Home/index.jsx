import ItemListContainer from "../ItemListContainer";
import Highlight from "../Higlight";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase/client";
import { getDocs, collection, query, where, limit, getDoc, doc } from "firebase/firestore";






function Home() {

    return(
      <>
      <Highlight/>
      <ItemListContainer />
      </>
    )
}

export default Home