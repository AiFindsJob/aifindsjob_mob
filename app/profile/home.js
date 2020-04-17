/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image,Text,View,TouchableOpacity,ScrollView,Dimensions} from  'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { } from 'react-native-paper';
import JobCard from './comp/jobCard';
import primary from '../index/properties';
import {data} from './comp/data'
import JobCat from './comp/jobCat'
import {Fonts} from '../index/fonts';
let i=0;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
        require('../assets/3.jpg'),
      ],
      tabC:true,
      expA:false,
      expB:false,
      expC:false,
      expD:false,
    };
  }

  _tcons=()=>{
        this.setState({tabC:false});
      }
      _tcomp=()=>{
         this.setState({tabC:true});
      }

      _expB=()=>{
        //this.setState({expA:!this.state.expA,expB:false,expC:false,expD:false});
        //navigate('INDUSTRY')
      }
      _expC=()=>{
        this.setState({expC:true,expB:false,expA:false,expD:false});
      }
      _expD=()=>{
        this.setState({expD:true,expB:false,expC:false,expA:false});
      }


  render() {
      let w = Dimensions.get('window').width;
      const {navigate} = this.props.navigation;
     
      let m = (w - 19) / 2;
    return (
      <View style={{backgroundColor:'#fff'}}>
        <ScrollView style={{}}>
        {/*Slider*/}
        <View style={{width:w,height:180,backgroundColor:'#fff',margin:0}}>
          <SliderBox circleLoop={true} ImageComponentStyle={{marginLeft:0, width: w, marginTop: 5}} images={this.state.images} autoplay paginationBoxVerticalPadding={5}  resizeMethod={'resize'}
  resizeMode={'cover'}
 />
        </View>

        {/*Banner*/}
        <View style={{}}>
          <Image style={{width:w,height:140,borderRadius:0,marginTop:5}} source={require('../assets/banner.jpeg')}/>
        </View>
        {/*Home page tabs*/}
        <View style={{width: w - 20,margin:10,elevation:5,backgroundColor:'#fff',borderRadius:9}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',elevation:5,borderRadius:0,backgroundColor:'#fff',borderTopLeftRadius: 9,borderTopRightRadius: 9}}>
            <TouchableOpacity onPress={this._tcomp} style={{width:m,backgroundColor:this.state.tabC?primary:'#fff',borderTopLeftRadius: 9,padding:15,alignItems:'center'}}>
              <Text style={{fontFamily:'RobotoCondensed-Regular',fontSize:16,color:this.state.tabC?'#fff':primary}}>Top Companies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._tcons} style={{width:m,backgroundColor:this.state.tabC?'#fff':primary,borderTopRightRadius: 9,padding:15,alignItems:'center'}}>
              <Text style={{fontFamily:'RobotoCondensed-Regular',fontSize:16,color:this.state.tabC?primary:'#fff'}}>Top Cunsultancy</Text>
            </TouchableOpacity>
          </View>

          {/*Top companies**/}
          <View style={{backgroundColor:'#fff',height:'auto'}} >
            {this.state.tabC?data.ccom.map((data, index) => (
               <JobCard cname={data.cname} img={data.img} key={index} cont={data.cont}/>
            )):data.ccun.map((data, index) => (
               <JobCard cname={data.cname} img={data.img} key={index} cont={data.cont}/>
            ))}
          </View>
        </View>

              {/*Jobs description*/}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <JobCat dataMap={data.industry.slice(0,6)} header="Industry" navigateCall={()=>{navigate('Industry')}}/>
              <JobCat dataMap={data.department.slice(0,6)} header="Department" navigateCall={()=>{navigate('Department')}}/>
              <JobCat dataMap={data.location.slice(0,6)} header="Location" navigateCall={()=>{navigate('Location')}}/>
              <JobCat dataMap={data.designation.slice(0,6)} header="Designation" navigateCall={()=>{navigate('Designation')}}/>
          </ScrollView>

        </ScrollView>
      </View>
    );
  }
}

export default Home;
