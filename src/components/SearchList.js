import React from 'react';
import { Picture } from './Picture';

export const SearchList = (props)=>{
    let totalNumberOfRecords = props.imagedata.length;
    console.log('Props Rec in List ',props.imagedata);
    const noRecordFoundJSX = <p>No Record Found</p>;
    const successJSX = (
        <>
        <p>List of Records {totalNumberOfRecords}</p>
        {/* for pixabay */}
        {/* {props.imagedata.map(ele=><Picture key={ele.id} url={ele.largeImageURL}/>)}     */}
        {/* for giphy */}
        {props.imagedata.map(ele=><Picture url={ele.images.original.url}/>)}
        {/* {props.imagedata.map(ele=><img src={ele.images.original.url}/>)} */}
        </>
    );
    return (
        <div>
            {props.imagedata.length==0?noRecordFoundJSX:successJSX}
        </div>
    )
}