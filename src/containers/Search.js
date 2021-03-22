import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchList } from '../components/SearchList';

export default class Search extends React.Component{
    constructor(props){
        // Init Props and States
        super(props); // calling a parent constructor
        // initalize the props from the parent and give it to child
        // props = {} // It is an Empty Object
        // props.title = "Image Search App"
        this.searchTxtValue = '';
        this.state = {imagedata:[]};
    }
    componentDidMount(){
        //this.giveMeTheData();
    }
    giveMeTheData(searchValue){
         //const url = `https://pixabay.com/api/?key=18010131-2c6717d7279979e4db2c229fd&image_type=photo&q=${searchValue}`
        const url = `https://api.giphy.com/v1/gifs/search?api_key=yWO9JvFWxJ0I4A3OQ3PtnFnXyCnYqJRX&q=${searchValue}&limit=20`;
        console.log('URL is ',url);
        const promise = fetch(url);
        promise.then(response=>{
            var p = response.json();
            p.then(result=>{
                console.log('Data is ',result.data);
                //console.log('Pixa Data is ',result.hits);
                this.setState({imagedata:result.data});
                //this.setState({imagedata:result.hits});
            }).catch(err=>{
                console.log('Error in JSON ',err);
            })
            console.log('Response is Coming ',response);
        }).catch(err=>{
            console.log('Error Coming From the Server ',err);
        })
    }
    takeInput(event){
        let data = event.target.value;
        this.searchTxtValue = data;
        //this.setState
        console.log('Calling by Child',this.searchTxtValue);
    }
    searchNow(){
        console.log('Search Button is Click');
        this.giveMeTheData(this.searchTxtValue);
    }
    render(){
        console.log('RENDER: Image Data is ',this.state.imagedata);
      return (
        <div>
            <div className="header">
                <h1 className='text-center'>{this.props.title}</h1> 
                <h2 className='text-center'>{this.props.name}</h2>
                <h3 className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg> &nbsp;
                <a href={this.props.link1} target="_blank">LinkedIn</a> &emsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg> &nbsp;
                <a href={this.props.link2} target="_blank">GitHub</a>
                </h3>
            </div>
            <div className="data">
                <SearchBar takeInput= {this.takeInput.bind(this)} btClick={this.searchNow.bind(this)}/>
                <SearchList imagedata={this.state.imagedata}/>
            </div>
        </div>
      )
    }
}

/* DUMB AND OLD
function Search(){
    return (<div >
        <h1 className='alert-success text-center'>Search Engine App</h1>
        <SearchBar/>
        <SearchList/>
    </div>)
}
export default Search;
*/
