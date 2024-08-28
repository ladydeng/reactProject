import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../../logo.svg';
import ToLogin from "../../components/home/ToLogin"
import './index.css';


class Index extends Component {
    state = {
        title: "首页腰线",
        banner: ""
    }

    getBanner = async () => {
        let res = await this.$axios.post("/lencon/pc/index/banner", { type: 20 })
        if(res.code === 1){
            this.setState({
                banner: res.res[0].ads_img
            })
        }
    }

    componentDidMount(){
        this.getBanner()
    }

    render() {
        let { title, banner } = this.state
        return (
            <div className='home'>
                <h1>首页({title})</h1>
                <ToLogin></ToLogin>
                <button>
                    <Link to="/login">Link 导航</Link>
                </button>
                <img src={banner} alt="banner" style={{ width: "100%", height: 'auto' }}></img>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
}

export default Index
