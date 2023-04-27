import React from 'react'
import { res } from "../../array/Res/res"
import ResearchItemContainer from '../ResearchItemContainer/ResearchItemContainer'
import { useParams  } from 'react-router-dom'
import NotFoundPage from '../NotFoundPage/NotFoundPage'


export default function ResearchItem() {

const { id } = useParams();

console.log(res.find(resch => resch.id == id));
const research = res.find(resch => resch.id == id);
 if (research) {
    return <ResearchItemContainer {...research} key={research.id} />
 } else {
    return <NotFoundPage />
 }

}
