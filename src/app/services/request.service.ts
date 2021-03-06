import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  url: string;
  endPoint = 'https://tamilrise.herokuapp.com';







  public adminlogin(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint}/user/login`;
    return this.http.post(this.url, credentials);
  }



//country
public getcountry() {
  this.url = `${this.endPoint}/country/`;
  return this.http.get(this.url);
}

public addcountry(newexam: { CountryName: any; Countrycode: any;}) {
  this.url = `${this.endPoint}/country/add`;
  return this.http.post(this.url, newexam);
}

public deletecountry(id) {
  this.url = `${this.endPoint}/country/delete?id=` + id;
  return this.http.delete(this.url);
}

updatecountry(id, body) {
  this.url = `${this.endPoint}/country/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchcountry() {
  this.url = `${this.endPoint}/country/`;
  return this.http.get(this.url);
}
fetchcountryById(id) {
  this.url = `${this.endPoint}/country/fetchdata?id=` + id;
  return this.http.get(this.url);
}


//speaker
public getspeaker() {
  this.url = `${this.endPoint}/speaker/`;
  return this.http.get(this.url);
}

public addspeaker(newexam: { name: any; designation: any;companyname: any;location: any;bio: any;email: any;mobile: any;address: any;website: any;linkedin: any;profile: any;}) {
  this.url = `${this.endPoint}/speaker/add`;
  return this.http.post(this.url, newexam);
}

public deletespeaker(id) {
  this.url = `${this.endPoint}/speaker/delete?id=` + id;
  return this.http.delete(this.url);
}

updatespeaker(id, body) {
  this.url = `${this.endPoint}/speaker/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchspeaker() {
  this.url = `${this.endPoint}/speaker/`;
  return this.http.get(this.url);
}
fetchspeakerById(id) {
  this.url = `${this.endPoint}/speaker/fetchdata?id=` + id;
  return this.http.get(this.url);
}


//sponsor
public getsponsor() {
  this.url = `${this.endPoint}/sponsor/`;
  return this.http.get(this.url);
}

public addsponsor(newexam: { name: any; description: any;address: any;email: any;phone: any;website: any;products: any;profile: any;}) {
  this.url = `${this.endPoint}/sponsor/add`;
  return this.http.post(this.url, newexam);
}

public deletesponsor(id) {
  this.url = `${this.endPoint}/sponsor/delete?id=` + id;
  return this.http.delete(this.url);
}

updatesponsor(id, body) {
  this.url = `${this.endPoint}/sponsor/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchsponsor(id) {
  this.url = `${this.endPoint}/sponsor/fetchByevenid?Event=` + id;
  return this.http.get(this.url);
}
fetchsponsorById(id) {
  this.url = `${this.endPoint}/sponsor/fetchdata?id=` + id;
  return this.http.get(this.url);
}




//state
public getstate() {
  this.url = `${this.endPoint}/state/`;
  return this.http.get(this.url);
}

public addstate(newexam: { Country: any;StateName: any; }) {
  this.url = `${this.endPoint}/state/add`;
  return this.http.post(this.url, newexam);
}

public deletestate(id) {
  this.url = `${this.endPoint}/state/delete?id=` + id;
  return this.http.delete(this.url);
}

updatestate(id, body) {
  this.url = `${this.endPoint}/state/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchstate() {
  this.url = `${this.endPoint}/state/`;
  return this.http.get(this.url);
}
fetchstateById(id) {
  this.url = `${this.endPoint}/state/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggstate() {
  this.url = `${this.endPoint}/state/aggregation`;
  return this.http.get(this.url);

}
public loadcountrybyins(id) {
  this.url = `${this.endPoint}/state/fetchBycountry?Country=`+id;
  return this.http.get(this.url);

}

//city
public getcity() {
  this.url = `${this.endPoint}/city/`;
  return this.http.get(this.url);
}

public addcity(newexam: { Country:any;State:any;region:any;district:any;CityName:any; }) {
  this.url = `${this.endPoint}/city/add`;
  return this.http.post(this.url, newexam);
}

public deletecity(id) {
  this.url = `${this.endPoint}/city/delete?id=` + id;
  return this.http.delete(this.url);
}

updatecity(id, body) {
  this.url = `${this.endPoint}/city/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchcity() {
  this.url = `${this.endPoint}/city/`;
  return this.http.get(this.url);
}
fetchcityById(id) {
  this.url = `${this.endPoint}/city/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggcity() {
  this.url = `${this.endPoint}/city/aggregation`;
  return this.http.get(this.url);

}
public loadcitybyins(id) {
  this.url = `${this.endPoint}/city/fetchBycity?district=`+id;
  return this.http.get(this.url);

}



//district
public getdistrict() {
  this.url = `${this.endPoint}/district/`;
  return this.http.get(this.url);
}

public adddistrict(newexam: { Country:any;State:any;region:any;district:any; }) {
  this.url = `${this.endPoint}/district/add`;
  return this.http.post(this.url, newexam);
}

public deletedistrict(id) {
  this.url = `${this.endPoint}/district/delete?id=` + id;
  return this.http.delete(this.url);
}

updatedistrict(id, body) {
  this.url = `${this.endPoint}/district/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchdistrict() {
  this.url = `${this.endPoint}/district/`;
  return this.http.get(this.url);
}
fetchdistrictById(id) {
  this.url = `${this.endPoint}/district/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggdistrict() {
  this.url = `${this.endPoint}/district/aggregation`;
  return this.http.get(this.url);

}
public loaddistrictbyins(id) {
  this.url = `${this.endPoint}/district/fetchBycity?region=`+id;
  return this.http.get(this.url);

}





//region
public getregion() {
  this.url = `${this.endPoint}/region/`;
  return this.http.get(this.url);
}

public addregion(newexam: { Country:any;State:any;region:any; }) {
  this.url = `${this.endPoint}/region/add`;
  return this.http.post(this.url, newexam);
}

public deleteregion(id) {
  this.url = `${this.endPoint}/region/delete?id=` + id;
  return this.http.delete(this.url);
}

updateregion(id, body) {
  this.url = `${this.endPoint}/region/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchregion() {
  this.url = `${this.endPoint}/region/`;
  return this.http.get(this.url);
}
fetchregionById(id) {
  this.url = `${this.endPoint}/region/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggregion() {
  this.url = `${this.endPoint}/region/aggregation`;
  return this.http.get(this.url);

}
public loadstatebyins(id) {
  this.url = `${this.endPoint}/region/fetchBystate?State=`+id;
  return this.http.get(this.url);

}

//membershipcost
public getmembershipcost() {
  this.url = `${this.endPoint}/membershipcost/`;
  return this.http.get(this.url);
}

public addmembershipcost(newexam: { Country:any;State:any;region:any;region1:any; }) {
  this.url = `${this.endPoint}/membershipcost/add`;
  return this.http.post(this.url, newexam);
}

public deletemembershipcost(id) {
  this.url = `${this.endPoint}/membershipcost/delete?id=` + id;
  return this.http.delete(this.url);
}

updatemembershipcost(id, body) {
  this.url = `${this.endPoint}/membershipcost/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchmembershipcost() {
  this.url = `${this.endPoint}/membershipcost/`;
  return this.http.get(this.url);
}
fetchmembershipcostById(id) {
  this.url = `${this.endPoint}/membershipcost/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getmembershipcostaggregion() {
  this.url = `${this.endPoint}/membershipcost/aggregation`;
  return this.http.get(this.url);

}
//board
public getdBoard() {
  this.url = `${this.endPoint}/Board/`;
  return this.http.get(this.url);
}

public adddBoard(newexam: { designation:any;order:any; }) {
  this.url = `${this.endPoint}/Board/add`;
  return this.http.post(this.url, newexam);
}

public deletedBoard(id) {
  this.url = `${this.endPoint}/Board/delete?id=` + id;
  return this.http.delete(this.url);
}

updatedBoard(id, body) {
  this.url = `${this.endPoint}/Board/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchsBoard() {
  this.url = `${this.endPoint}/Board/`;
  return this.http.get(this.url);
}
fetchsBoardById(id) {
  this.url = `${this.endPoint}/Board/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getsBoardaggregion(chapterid) {
  this.url = `${this.endPoint}/Board/fetchBychapteridtrackid?chapter=`+chapterid;
  return this.http.get(this.url);

}

//agendas
public getagendas() {
  this.url = `${this.endPoint}/agenda/`;
  return this.http.get(this.url);
}

public addagendas(newexam: { event:any;track:any;speaker1:any;speaker2:any;date:any;time:any;venue:any;agenda:any; }) {
  this.url = `${this.endPoint}/agenda/add`;
  return this.http.post(this.url, newexam);
}

public deleteagendas(id) {
  this.url = `${this.endPoint}/agenda/delete?id=` + id;
  return this.http.delete(this.url);
}

updateagendas(id, body) {
  this.url = `${this.endPoint}/agenda/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchagendas() {
  this.url = `${this.endPoint}/agenda/`;
  return this.http.get(this.url);
}
fetchagendasById(id) {
  this.url = `${this.endPoint}/agenda/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getagendasaggregion(eventid,trackid) {
  this.url = `${this.endPoint}/agenda/fetchByevenidtrackid?event=`+eventid+'&track='+trackid;
  return this.http.get(this.url);

}

//gender
public getgender() {
  this.url = `${this.endPoint}/gender/`;
  return this.http.get(this.url);
}

public addgender(newexam: { CountryName: any; }) {
  this.url = `${this.endPoint}/gender/add`;
  return this.http.post(this.url, newexam);
}

public deletegender(id) {
  this.url = `${this.endPoint}/gender/delete?id=` + id;
  return this.http.delete(this.url);
}

updategender(id, body) {
  this.url = `${this.endPoint}/gender/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchgender() {
  this.url = `${this.endPoint}/gender/`;
  return this.http.get(this.url);
}
fetchgenderById(id) {
  this.url = `${this.endPoint}/gender/fetchdata?id=` + id;
  return this.http.get(this.url);
}

//tracker
public gettracker() {
  this.url = `${this.endPoint}/tracker/`;
  return this.http.get(this.url);
}

public addtracker(newexam: { Event: any;TrackName: any; }) {
  this.url = `${this.endPoint}/tracker/add`;
  return this.http.post(this.url, newexam);
}

public deletetracker(id) {
  this.url = `${this.endPoint}/tracker/delete?id=` + id;
  return this.http.delete(this.url);
}

updatetracker(id, body) {
  this.url = `${this.endPoint}/tracker/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchtracker() {
  this.url = `${this.endPoint}/tracker/`;
  return this.http.get(this.url);
}
fetchtrackerById(id) {
  this.url = `${this.endPoint}/tracker/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggtracker(id) {
  this.url = `${this.endPoint}/tracker/fetchByevenid?Event=` + id;
  return this.http.get(this.url);

}

//eventlink
public geteventlink() {
  this.url = `${this.endPoint}/eventlink/`;
  return this.http.get(this.url);
}

public addeventlink(newexam: { Event: any;Eventlink: any; }) {
  this.url = `${this.endPoint}/eventlink/add`;
  return this.http.post(this.url, newexam);
}

public deleteeventlink(id) {
  this.url = `${this.endPoint}/eventlink/delete?id=` + id;
  return this.http.delete(this.url);
}

updateeventlink(id, body) {
  this.url = `${this.endPoint}/eventlink/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetcheventlink() {
  this.url = `${this.endPoint}/eventlink/`;
  return this.http.get(this.url);
}
fetcheventlinkById(id) {
  this.url = `${this.endPoint}/eventlink/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggeventlink(id) {
  this.url = `${this.endPoint}/eventlink/fetchByevenid?Event=` + id;
  return this.http.get(this.url);

}

//eventimage
public geteventimage() {
  this.url = `${this.endPoint}/eventimage/`;
  return this.http.get(this.url);
}

public addeventimage(newexam: { Event: any;eventimage: any; }) {
  this.url = `${this.endPoint}/eventimage/add`;
  return this.http.post(this.url, newexam);
}

public deleteeventimage(id) {
  this.url = `${this.endPoint}/eventimage/delete?id=` + id;
  return this.http.delete(this.url);
}

updateeventimage(id, body) {
  this.url = `${this.endPoint}/eventimage/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetcheventimage() {
  this.url = `${this.endPoint}/eventimage/`;
  return this.http.get(this.url);
}
fetcheventimageById(id) {
  this.url = `${this.endPoint}/eventimage/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggeventimage(id) {
  this.url = `${this.endPoint}/eventimage/fetchByevenid?Event=` + id;
  return this.http.get(this.url);

}

//banner
public getbannerimage() {
  this.url = `${this.endPoint}/banner/`;
  return this.http.get(this.url);
}

public addbannerimage(newexam: { banner: any; }) {
  this.url = `${this.endPoint}/banner/add`;
  return this.http.post(this.url, newexam);
}

public deletebannerimage(id) {
  this.url = `${this.endPoint}/banner/delete?id=` + id;
  return this.http.delete(this.url);
}

updatebannerimage(id, body) {
  this.url = `${this.endPoint}/banner/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchebannerimage() {
  this.url = `${this.endPoint}/banner/`;
  return this.http.get(this.url);
}
fetchbannerimageById(id) {
  this.url = `${this.endPoint}/banner/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggbannerimage(id) {
  this.url = `${this.endPoint}/banner/fetchByevenid?Event=` + id;
  return this.http.get(this.url);

}


//Interests
public getInterests() {
  this.url = `${this.endPoint}/interests/`;
  return this.http.get(this.url);
}

public addInterests(newexam: { Interests: any; }) {
  this.url = `${this.endPoint}/interests/add`;
  return this.http.post(this.url, newexam);
}

public deleteInterests(id) {
  this.url = `${this.endPoint}/interests/delete?id=` + id;
  return this.http.delete(this.url);
}

updateInterests(id, body) {
  this.url = `${this.endPoint}/interests/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchInterests() {
  this.url = `${this.endPoint}/interests/`;
  return this.http.get(this.url);
}
fetchInterestsById(id) {
  this.url = `${this.endPoint}/interests/fetchdata?id=` + id;
  return this.http.get(this.url);
}


//membershipcatgory
public getmembershipcatgory() {
  this.url = `${this.endPoint}/bussinesscategory/`;
  return this.http.get(this.url);
}

public addmembershipcatgory(newexam: { Interests: any; }) {
  this.url = `${this.endPoint}/bussinesscategory/add`;
  return this.http.post(this.url, newexam);
}

public deletemembershipcatgory(id) {
  this.url = `${this.endPoint}/bussinesscategory/delete?id=` + id;
  return this.http.delete(this.url);
}

updatemembershipcatgory(id, body) {
  this.url = `${this.endPoint}/bussinesscategory/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchmembershipcatgory() {
  this.url = `${this.endPoint}/bussinesscategory/`;
  return this.http.get(this.url);
}
fetchmembershipcatgoryById(id) {
  this.url = `${this.endPoint}/bussinesscategory/fetchdata?id=` + id;
  return this.http.get(this.url);
}



//membershiptype
public getmembershiptype() {
  this.url = `${this.endPoint}/membershiptype/`;
  return this.http.get(this.url);
}

public addmembershiptype(newexam: { MembershipType: any;Amount: any; }) {
  this.url = `${this.endPoint}/membershiptype/add`;
  return this.http.post(this.url, newexam);
}

public deletemembershiptype(id) {
  this.url = `${this.endPoint}/membershiptype/delete?id=` + id;
  return this.http.delete(this.url);
}

updatemembershiptype(id, body) {
  this.url = `${this.endPoint}/membershiptype/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchmembershiptype() {
  this.url = `${this.endPoint}/membershiptype/`;
  return this.http.get(this.url);
}
fetchmembershiptypeById(id) {
  this.url = `${this.endPoint}/membershiptype/fetchdata?id=` + id;
  return this.http.get(this.url);
}



//membershipclassification
public getmembershipclassification() {
  this.url = `${this.endPoint}/membershipclass/`;
  return this.http.get(this.url);
}

public addmembershipclassification(newexam: { MembershipType: any;Amount: any;}) {
  this.url = `${this.endPoint}/membershipclass/add`;
  return this.http.post(this.url, newexam);
}

public deletemembershipclassification(id) {
  this.url = `${this.endPoint}/membershipclass/delete?id=` + id;
  return this.http.delete(this.url);
}

updatemembershipclassification(id, body) {
  this.url = `${this.endPoint}/membershipclass/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchmembershipclassification() {
  this.url = `${this.endPoint}/membershipclass/`;
  return this.http.get(this.url);
}
fetchmembershipclassificationById(id) {
  this.url = `${this.endPoint}/membershipclass/fetchdata?id=` + id;
  return this.http.get(this.url);
}





//chapter
public getchapter() {
  this.url = `${this.endPoint}/chapter/`;
  return this.http.get(this.url);
}

public addchapter(newexam: { Country:any;State:any;region:any;district:any;ChapterName:any; Address:any;Email:any;Mobile:any;ContactPerson:any;CreatedOn:any;UpdatedOn:any;status:any;}) {
  this.url = `${this.endPoint}/chapter/add`;
  return this.http.post(this.url, newexam);
}

public deletechapter(id) {
  this.url = `${this.endPoint}/chapter/delete?id=` + id;
  return this.http.delete(this.url);
}

updatechapter(id, body) {
  this.url = `${this.endPoint}/chapter/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchchapter() {
  this.url = `${this.endPoint}/chapter/`;
  return this.http.get(this.url);
}
fetchchapterById(id) {
  this.url = `${this.endPoint}/chapter/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggchapter() {
  this.url = `${this.endPoint}/chapter/aggregation`;
  return this.http.get(this.url);

}
public loadchapterbyins(id) {
  this.url = `${this.endPoint}/chapter/fetchBycity?district=`+id;
  return this.http.get(this.url);

}




//memeber
public getmemeber(){
  this.url = `${this.endPoint}/member/`;
  return this.http.get(this.url);
}

public addmemeber(newexam: { Country:any;State:any;region:any;district:any;CityName:any;Name:any;board:any;Gender:any; Chapter:any;Category:any;MembershipType:any;Address:any;Email:any;Mobile:any;bussinessname:any;DOB:any;pincode:any;Products:any;Keywords:any;Website:any;Interests:any;SocialMediaLinks:any;ValidUpto:any;CreatedOn:any;UpdatedOn:any;image:any;bussinesslogo:any;status:any;}) {
  this.url = `${this.endPoint}/member/add`;
  return this.http.post(this.url, newexam);
}

public deletememeber(id) {
  this.url = `${this.endPoint}/member/delete?id=` + id;
  return this.http.delete(this.url);
}

updatememeber(id, body) {
  this.url = `${this.endPoint}/member/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchmemeber() {
  this.url = `${this.endPoint}/member/`;
  return this.http.get(this.url);
}
fetchmemeberById(id) {
  this.url = `${this.endPoint}/member/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggmemeber() {
  this.url = `${this.endPoint}/member/aggregation`;
  return this.http.get(this.url);

}
public loadmemeberbyins(id) {
  this.url = `${this.endPoint}/member/fetchBycity?district=`+id;
  return this.http.get(this.url);

}






//events
public getevents(){
  this.url = `${this.endPoint}/events/`;
  return this.http.get(this.url);
}

public addevents(newexam: { Country:any;State:any;region:any;district:any;CityName:any;Chapter:any;FromDate:any;ToDate:any;Title:any;Description:any;ExternalLinks:any;Venue:any;Cost:any;CreatedOn:any;UpdatedOn:any;status:any;}) {
  this.url = `${this.endPoint}/events/add`;
  return this.http.post(this.url, newexam);
}

public deleteevents(id) {
  this.url = `${this.endPoint}/events/delete?id=` + id;
  return this.http.delete(this.url);
}

updateevents(id, body) {
  this.url = `${this.endPoint}/events/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchevents() {
  this.url = `${this.endPoint}/events/`;
  return this.http.get(this.url);
}
fetcheventsById(id) {
  this.url = `${this.endPoint}/events/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggevents() {
  this.url = `${this.endPoint}/events/aggregation`;
  return this.http.get(this.url);

}
public loadeventsbyins(id) {
  this.url = `${this.endPoint}/events/fetchBycity?district=`+id;
  return this.http.get(this.url);

}







//news
public getnews(){
  this.url = `${this.endPoint}/news/`;
  return this.http.get(this.url);
}

public addnews(newexam: { Country:any;State:any;region:any;district:any;CityName:any;Chapter:any;FromDate:any;Title:any;Description:any;ExternalLinks:any;CreatedOn:any;UpdatedOn:any;status:any;}) {
  this.url = `${this.endPoint}/news/add`;
  return this.http.post(this.url, newexam);
}

public deletenews(id) {
  this.url = `${this.endPoint}/news/delete?id=` + id;
  return this.http.delete(this.url);
}

updatenews(id, body) {
  this.url = `${this.endPoint}/news/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchnews() {
  this.url = `${this.endPoint}/news/`;
  return this.http.get(this.url);
}
fetchnewsById(id) {
  this.url = `${this.endPoint}/news/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public getaggnews() {
  this.url = `${this.endPoint}/news/aggregation`;
  return this.http.get(this.url);

}
public loadnewsbyins(id) {
  this.url = `${this.endPoint}/news/fetchBycity?district=`+id;
  return this.http.get(this.url);

}












  public stafflogin(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint}/staffLogin/login`;
    return this.http.post(this.url, credentials);
  }

  public StuLogin(credentials) {
    this.url = `${this.endPoint}/studentLogin/StuLogin`;
    return this.http.post(this.url,credentials);
  }


  public getDesignation() {
    this.url = `${this.endPoint}/user-designation/fetch`;
    return this.http.get(this.url);
  }


  public addNewDesignation(newDesignation) {
    this.url = `${this.endPoint}/user-designation/add`;
    return this.http.post(this.url, newDesignation);
  }

  public updateDesignation(id, data) {
    this.url = `${this.endPoint}/user-designation/update?id=${id}`;
    return this.http.put(this.url, data);
  }

  public deleteDesignation(Id) {

    this.url = `${this.endPoint}/user-designation/delete?id=` + Id;
    return this.http.delete(this.url);
  }

  public fetchDesignation(id) {

    this.url = `${this.endPoint}/user-designation/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public getAcademicYear() {
    this.url = `${this.endPoint}/academic-year/aggregation`;
    return this.http.get(this.url);

  }

  public addAcademicYear(newUser: { year, short_code, start_date, end_date; }) {
    this.url = `${this.endPoint}/academic-year/add`;
    return this.http.post(this.url, newUser);
  }

  public deleteAcademicYear(id) {
    this.url = `${this.endPoint}/academic-year/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateAcademicYear(id, body) {
    this.url = `${this.endPoint}/academic-year/update?id=` + id;
    return this.http.put(this.url, body);

  }
  public getAcademicYearbyIns(institution) {
    this.url = `${this.endPoint}/academic-year/fetchbyIns/?institution=` + institution;
    return this.http.get(this.url);
    }
  fetchAcademicYear() {
    this.url = `${this.endPoint}/academic-year`;
    return this.http.get(this.url);

  }
  fetchAcademicyearById(id) {
    this.url = `${this.endPoint}/academic-year/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  fetchAcademicyearByBatch(batch) {
    this.url = `${this.endPoint}/academic-year/fetchbybatch?batch=` + batch;
    return this.http.get(this.url);
  }

  fetchAcademicyearbyCourseProgram(courseprogram) {
    this.url = `${this.endPoint}/academic-year/fetchbycourseprogram?courseprogram=` + courseprogram;
    return this.http.get(this.url);
  }


  // nationality
  public getNationality() {
    this.url = `${this.endPoint}/nationality`;
    return this.http.get(this.url);
  }

  public addNationality(newNationalityInfo: { nationality: any; }) {
    this.url = `${this.endPoint}/nationality/add`;
    return this.http.post(this.url, newNationalityInfo);

  }
  public deleteNationality(id) {
    this.url = `${this.endPoint}/nationality/delete?id=` + id;
    return this.http.delete(this.url);
  }

  fetchNationality() {
    this.url = `${this.endPoint}/nationality`;
    return this.http.get(this.url);
  }

  fetchNationalityBy(id) {
    this.url = `${this.endPoint}/nationality/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  updateNationality(id, body) {
    this.url = `${this.endPoint}/nationality/update?id=` + id;
    return this.http.put(this.url, body);
  }

  // religion
  public getReligion() {
    this.url = `${this.endPoint}/religion`;
    return this.http.get(this.url);

  }
  public addReligion(newReligionInfo: { religion: any; }) {
    this.url = `${this.endPoint}/religion/add`;
    return this.http.post(this.url, newReligionInfo);
  }

  public deleteReligion(id) {
    this.url = `${this.endPoint}/academic-year/religion/delete?id=` + id;
    return this.http.delete(this.url);

  }
  fetchReligion() {
    this.url = `${this.endPoint}/religion`;
    return this.http.get(this.url);
  }

  fetchReligionBy(id) {
    this.url = `${this.endPoint}/religion/fetchdata?id=` + id;
    return this.http.get(this.url);

  }
  updateReligion(id, body) {

    this.url = `${this.endPoint}/religion/update?id=` + id, body;
    return this.http.put(this.url, body);

  }

  // community
  public getCommunity() {
    this.url = `${this.endPoint}/community`;
    return this.http.get(this.url);
  }

  public addCommunity(newCommunity: { community: any; }) {
    this.url = `${this.endPoint}/community/add`;
    return this.http.post(this.url, newCommunity);
  }

  public deleteCommunity(id) {
    this.url = `${this.endPoint}/community/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateCommunity(id, body) {
    this.url = `${this.endPoint}/community/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchCommunity() {
    this.url = `${this.endPoint}/community/`;
    return this.http.get(this.url);
  }
  fetchCommunityBy(id) {
    this.url = `${this.endPoint}/community/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // caste
  public getCaste() {
    this.url = `${this.endPoint}/caste`;
    return this.http.get(this.url);
  }

  public addCaste(newCaste: { caste: any; }) {
    this.url = `${this.endPoint}/caste/add`;
    return this.http.post(this.url, newCaste);
  }

  public deleteCaste(id) {
    this.url = `${this.endPoint}/caste/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateCaste(id, body) {
    this.url = `${this.endPoint}/caste/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchCaste() {
    this.url = `${this.endPoint}/caste/`;
    return this.http.get(this.url);
  }
  fetchCasteBy(id) {
    this.url = `${this.endPoint}/caste/fetchdata?id=` + id;
    return this.http.get(this.url);
  }


  


  // admission-type

  public getAdmissiontype() {
    this.url = `${this.endPoint}/admission-type/aggregation`;
    return this.http.get(this.url);
  }

  public addAdmissiontype(newAdmissiontype: { institution: any; admissiontype: any; }) {
    this.url = `${this.endPoint}/admission-type/add`;
    return this.http.post(this.url, newAdmissiontype);
  }

 deleteAdmissiontype(id) {
   console.log('id',id);
    this.url = `${this.endPoint}/admission-type/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateAdmissiontype(id, body) {
    this.url = `${this.endPoint}/admission-type/update?id=${id}`;
    return this.http.put(this.url, body);
  }


  fetchAdmissiontypeBy(id) {
    this.url = `${this.endPoint}/admission-type/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

//dashboard data

public getstudentcount() {
  this.url = `${this.endPoint}/student-details/countdtu`;
  return this.http.get(this.url);
}
public getstudentcountchart() {
  this.url = `${this.endPoint}/student-details/countstuchart`;
  return this.http.get(this.url);
}

  // Institution
  public getInstitution() {
    this.url = `${this.endPoint}/institution`;
    return this.http.get(this.url);
  }
  public addInstitution(newInstitution: {}) {
    this.url = `${this.endPoint}/institution/add`;
    return this.http.post(this.url, newInstitution);
  }
  public deleteInstitution(id) {
    this.url = `${this.endPoint}/institution/delete?id=` + id;
    return this.http.delete(this.url);
  }
  updateInstitution(id, body) {
    this.url = `${this.endPoint}/institution/update?id=${id}`;
    return this.http.put(this.url, body);
  }
  fetchInstitution() {
    this.url = `${this.endPoint}/institution`;
    return this.http.get(this.url);
  }
  public fetchInstitutionById(id) {
    this.url = `${this.endPoint}/institution/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  //BoardOFEducation
  public getBoard() {
    this.url = `${this.endPoint}/boardOfEducation/`;
    return this.http.get(this.url);
  }

  public addBoard(newBoard: {}) {
    this.url = `${this.endPoint}/boardOfEducation/add`;
    return this.http.post(this.url, newBoard);
  }

  public deleteBoard(id) {
    this.url = `${this.endPoint}/boardOfEducation/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateBoard(id, body) {
    this.url = `${this.endPoint}/boardOfEducation/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchBoard() {
    this.url = `${this.endPoint}/boardOfEducation/`;
    return this.http.get(this.url);
  }
  fetchBoardById(id) {
    this.url = `${this.endPoint}/boardOfEducation/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  fetchBoards() {
    this.url = `${this.endPoint}/boardOfEducation/`;
    return this.http.get(this.url);
  }


   //examtype
   public getexamtype() {
    this.url = `${this.endPoint}/examtype/`;
    return this.http.get(this.url);
  }

  public addexamtype(newBoard: {}) {
    this.url = `${this.endPoint}/examtype/add`;
    return this.http.post(this.url, newBoard);
  }

  public deleteexamtype(id) {
    this.url = `${this.endPoint}/examtype/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateexamtype(id, body) {
    this.url = `${this.endPoint}/examtype/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchexamtype() {
    this.url = `${this.endPoint}/examtype/`;
    return this.http.get(this.url);
  }
  fetchexamtypeById(id) {
    this.url = `${this.endPoint}/examtype/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  fetchexamtypes() {
    this.url = `${this.endPoint}/examtype/`;
    return this.http.get(this.url);
  }



  //calenderdata
  public calenderdata() {
    this.url = `${this.endPoint}/calenderdata/aggregation`;
    return this.http.get(this.url);
  }

  public addcalenderdata(newcalenderdata: { time: any; institution: any; Date: any;eventname: any;description:any;location:any;photoLocation:any }) {
    this.url = `${this.endPoint}/calenderdata/add`;
    return this.http.post(this.url, newcalenderdata);
  }
  public deletecalederdata(id) {
    this.url = `${this.endPoint}/calenderdata/delete?id=` + id;
    return this.http.delete(this.url);
  }
  fetchcalenderById(id) {
    this.url = `${this.endPoint}/calenderdata/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  updatecalender(id, body) {
    this.url = `${this.endPoint}/calenderdata/update?id=${id}`;
    return this.http.put(this.url, body);
  }
  fetchcalender() {
    this.url = `${this.endPoint}/calenderdata/`;
    return this.http.get(this.url);
  }
  fetchcalenderdata() {
    this.url = `${this.endPoint}/calenderdta/`;
    return this.http.get(this.url);
  }



  //Admission Category
  public getAdmissionCategory() {
    this.url = `${this.endPoint}/admissionCategory/aggregation`;
    return this.http.get(this.url);
  }

  public addAdmissionCategory(newadmissionCategory: { institution: any; admissionCategory: any; }) {
    this.url = `${this.endPoint}/admissionCategory/add`;
    return this.http.post(this.url, newadmissionCategory);
  }

  public deleteAdmissionCategory(id) {
    this.url = `${this.endPoint}/admissionCategory/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateAdmissionCategory(id, body) {
    this.url = `${this.endPoint}/admissionCategory/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchAdmissionCategory() {
    this.url = `${this.endPoint}/admissionCategory/`;
    return this.http.get(this.url);
  }
  fetchAdmissionCategoryById(id) {
    this.url = `${this.endPoint}/admissionCategory/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

//exam
public getexam() {
  this.url = `${this.endPoint}/exam/aggregation`;
  return this.http.get(this.url);
}

public addexam(newexam: { examtype: any; examname: any; }) {
  this.url = `${this.endPoint}/exam/add`;
  return this.http.post(this.url, newexam);
}

public deleteexam(id) {
  this.url = `${this.endPoint}/exam/delete?id=` + id;
  return this.http.delete(this.url);
}

updateexam(id, body) {
  this.url = `${this.endPoint}/exam/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchexam() {
  this.url = `${this.endPoint}/exam/`;
  return this.http.get(this.url);
}
fetchexamById(id) {
  this.url = `${this.endPoint}/exam/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// batch
public getbatch() {
  this.url = `${this.endPoint}/batch/aggregation`;
  return this.http.get(this.url);

}
public addBatch(newBatch: { batch: any; }) {
  this.url = `${this.endPoint}/batch/add`;
  return this.http.post(this.url, newBatch);
}

public deleteBatch(id) {
  this.url = `${this.endPoint}/batch/delete?id=` + id;
  return this.http.delete(this.url);

}
fetchBatch() {
  this.url = `${this.endPoint}/batch`;
  return this.http.get(this.url);
}

fetchBatchById(id) {
  this.url = `${this.endPoint}/batch/fetchdata?id=` + id;
  return this.http.get(this.url);
}
fetchBatchByIns(institution) {
  this.url = `${this.endPoint}/batch/fetchbyIns?institution=` + institution;
  return this.http.get(this.url);

}
  updateBatch(id, body) {
    this.url = `${this.endPoint}/batch/update?id=` + id, body;
    return this.http.put(this.url, body);
  }
  public getBatchByCoursePrgram(courseprogram) {
    this.url = `${this.endPoint}/batch/fetchByCour/?courseprogram=` + courseprogram;
    return this.http.get(this.url);
  }
  public getBatchByDegree(degree) {
    this.url = `${this.endPoint}/batch/fetchByCour/?degree=` + degree;
    return this.http.get(this.url);
  }
  // course-category
  public getCoursecategory() {
    this.url = `${this.endPoint}/course-category/aggregation`;
    return this.http.get(this.url);
  }

  public getCoursecategorybyIns(institution) {
    this.url = `${this.endPoint}/course-category/fetchbyIns/?institution=` + institution;
    return this.http.get(this.url);
  }

  public addCoursecategory(newCoursecategory: { institution: any; coursecategory: any; }) {
    this.url = `${this.endPoint}/course-category/add`;
    return this.http.post(this.url, newCoursecategory);
  }

  public deleteCoursecategory(id) {
    this.url = `${this.endPoint}/course-category/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateCoursecategory(id, body) {
    this.url = `${this.endPoint}/course-category/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchCoursecategory() {
    this.url = `${this.endPoint}/course-category/`;
    return this.http.get(this.url);
  }
  fetchCoursecategoryBy(id) {
    this.url = `${this.endPoint}/course-category/fetchdata?id=` + id;
    return this.http.get(this.url);
  }


  // course-program
  public getCourseprogram() {
    this.url = `${this.endPoint}/course-program/aggregation`;
    return this.http.get(this.url);
  }

  public addCourseprogram(newCourseprogram: { institution: any; coursecategory: any; courseprogram: any; }) {
    this.url = `${this.endPoint}/course-program/add`;
    return this.http.post(this.url, newCourseprogram);
  }

  public deleteCourseprogram(id) {
    this.url = `${this.endPoint}/course-program/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateCourseprogram(id, body) {
    this.url = `${this.endPoint}/course-program/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchCourseprogram() {
    this.url = `${this.endPoint}/course-program/`;
    return this.http.get(this.url);
  }
  fetchCourseprogramBy(id) {
    this.url = `${this.endPoint}/course-program/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  public getCoursecategorybycourPro(coursecategory) {
    this.url = `${this.endPoint}/course-program/fetchByCouCate/?coursecategory=` + coursecategory;
    return this.http.get(this.url);
  }
  public getCourseprogramByIns(institution) {
    this.url = `${this.endPoint}/course-program/fetchbyIns/?institution=` + institution;
    return this.http.get(this.url);
  }
// Address Type
public getAddressType() {
  this.url = `${this.endPoint}/addressType`;
  return this.http.get(this.url);
}

public addAddressType(newAddressType:any) {
  this.url = `${this.endPoint}/addressType/add`;
  return this.http.post(this.url,newAddressType);
}

public deleteAddressType(id) {
  this.url = `${this.endPoint}/addressType/delete?id=`+ id;
  return this.http.delete(this.url);
}

updateAddressType(id, body) {
  this.url = `${this.endPoint}/addressType/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchAddressType() {
  this.url = `${this.endPoint}/addressType`;
  return this.http.get(this.url);
}
fetchAddressTypeById(id) {
  this.url = `${this.endPoint}/addressType/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// Course Type
public getCourseType() {
  this.url = `${this.endPoint}/courseType/aggregation`;
  return this.http.get(this.url);
}

public addCourseType(newCourseType:any) {
  this.url = `${this.endPoint}/courseType/add`;
  return this.http.post(this.url,newCourseType);
}

public deleteCourseType(id) {
  this.url = `${this.endPoint}/courseType/delete?id=`+ id;
  return this.http.delete(this.url);
}

updateCourseType(id, body) {
  this.url = `${this.endPoint}/courseType/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchCourseType() {
  this.url = `${this.endPoint}/courseType`;
  return this.http.get(this.url);
}
fetchCourseTypeById(id) {
  this.url = `${this.endPoint}/courseType/fetchdata?id=` + id;
  return this.http.get(this.url);
}
getCoursetypebyQua(QualificationType) {
  this.url = `${this.endPoint}/courseType/fetchbyQua?qualificationType=` + QualificationType;
      return this.http.get(this.url);
}

// Degree
public getDegree() {
  this.url = `${this.endPoint}/degree/aggregation`;
  return this.http.get(this.url);
}
public addDegree(newDegree: { }) {
  this.url = `${this.endPoint}/degree/add`;
  return this.http.post(this.url, newDegree);
}
public deleteDegree(id) {
  this.url = `${this.endPoint}/degree/delete?id=`+ id;
  return this.http.delete(this.url);
}
updateDegree(id, body) {
  this.url = `${this.endPoint}/degree/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchDegree() {
  this.url = `${this.endPoint}/degree`;
  return this.http.get(this.url);
}
fetchDegreeById(id) {
  this.url = `${this.endPoint}/degree/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getDegreeByIns(institution) {
  this.url = `${this.endPoint}/degree/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
// InstitutionType
public getInstitutionType() {
  this.url = `${this.endPoint}/institutionType`;
  return this.http.get(this.url);
}
public addInstitutionType(newInstitution: { }) {
  this.url = `${this.endPoint}/institutionType/add`;
  return this.http.post(this.url, newInstitution);
}
public deleteInstitutionType(id) {
  this.url = `${this.endPoint}/institutionType/delete?id=`+ id;
  return this.http.delete(this.url);
}
updateInstitutionType(id, body) {
  this.url = `${this.endPoint}/institutionType/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchInstitutionType() {
  this.url = `${this.endPoint}/institutionType`;
  return this.http.get(this.url);
}
fetchInstitutionTypeById(id) {
  this.url = `${this.endPoint}/institutionType/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// Medium
public getMedium() {
  this.url = `${this.endPoint}/medium`;
  return this.http.get(this.url);
}
public addMedium(newMedium: { }) {
  this.url = `${this.endPoint}/medium/add`;
  return this.http.post(this.url, newMedium);
}
public deleteMedium(id) {
  this.url = `${this.endPoint}/medium/delete?id=`+ id;
  return this.http.delete(this.url);
}
updateMedium(id, body) {
  this.url = `${this.endPoint}/medium/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchMedium() {
  this.url = `${this.endPoint}/medium`;
  return this.http.get(this.url);
}
fetchMediumById(id) {
  this.url = `${this.endPoint}/medium/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// MotherTongue
public getMotherTongue() {
  this.url = `${this.endPoint}/motherTongue`;
  return this.http.get(this.url);
}
public addMotherTongue(newMedium: { }) {
  this.url = `${this.endPoint}/motherTongue/add`;
  return this.http.post(this.url, newMedium);
}
public deleteMotherTongue(id) {
  this.url = `${this.endPoint}/motherTongue/delete?id=`+ id;
  return this.http.delete(this.url);
}
updateMotherTongue(id, body) {
  this.url = `${this.endPoint}/motherTongue/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchMotherTongue() {
  this.url = `${this.endPoint}/motherTongue`;
  return this.http.get(this.url);
}
fetchMotherTongueById(id) {
  this.url = `${this.endPoint}/motherTongue/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// PaymentMethod
public getPaymentMethod() {
  this.url = `${this.endPoint}/paymentMethod`;
  return this.http.get(this.url);
}
public addPaymentMethod(newMedium: { }) {
  this.url = `${this.endPoint}/paymentMethod/add`;
  return this.http.post(this.url, newMedium);
}
public deletePaymentMethod(id) {
  this.url = `${this.endPoint}/paymentMethod/delete?id=`+ id;
  return this.http.delete(this.url);
}
updatePaymentMethod(id, body) {
  this.url = `${this.endPoint}/paymentMethod/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchPaymentMethod() {
  this.url = `${this.endPoint}/paymentMethod`;
  return this.http.get(this.url);
}
fetchPaymentMethodById(id) {
  this.url = `${this.endPoint}/paymentMethod/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// ReferralType
public getReferralType() {
  this.url = `${this.endPoint}/referralType`;
  return this.http.get(this.url);
}
public addReferralType(newMedium: { }) {
  this.url = `${this.endPoint}/referralType/add`;
  return this.http.post(this.url, newMedium);
}
public deleteReferralType(id) {
  this.url = `${this.endPoint}/referralType/delete?id=`+ id;
  return this.http.delete(this.url);
}
updateReferralType(id, body) {
  this.url = `${this.endPoint}/referralType/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchReferralType() {
  this.url = `${this.endPoint}/referralType`;
  return this.http.get(this.url);
}
fetchReferralTypeById(id) {
  this.url = `${this.endPoint}/referralType/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// ScholarshipCategory
public getScholarshipCategory() {
  this.url = `${this.endPoint}/scholarshipCategory`;
  return this.http.get(this.url);
}
public addScholarshipCategory(newMedium: { }) {
  this.url = `${this.endPoint}/scholarshipCategory/add`;
  return this.http.post(this.url, newMedium);
}
public deleteScholarshipCategory(id) {
  this.url = `${this.endPoint}/scholarshipCategory/delete?id=`+ id;
  return this.http.delete(this.url);
}
updateScholarshipCategory(id, body) {
  this.url = `${this.endPoint}/scholarshipCategory/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchScholarshipCategory() {
  this.url = `${this.endPoint}/scholarshipCategory`;
  return this.http.get(this.url);
}
fetchScholarshipCategoryById(id) {
  this.url = `${this.endPoint}/scholarshipCategory/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// Bank
public getBank() {
  this.url = `${this.endPoint}/bank/aggregation`;
  return this.http.get(this.url);
}
public addBank(newDegree: { }) {
  this.url = `${this.endPoint}/bank/add`;
  return this.http.post(this.url, newDegree);
}
public deleteBank(id) {
  this.url = `${this.endPoint}/bank/delete?id=`+ id;
  return this.http.delete(this.url);
}
updateBank(id, body) {
  this.url = `${this.endPoint}/bank/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchBank() {
  this.url = `${this.endPoint}/bank`;
  return this.http.get(this.url);
}
fetchBankById(id) {
  this.url = `${this.endPoint}/bank/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// staff-type
  public getStafftype() {
    this.url = `${this.endPoint}/staff-type`;
    return this.http.get(this.url);
  }

  public addStafftype(newStaffType: { }) {
    this.url = `${this.endPoint}/staff-type/add`;
    return this.http.post(this.url, newStaffType);
  }

  public deleteStafftype(id) {
    this.url = `${this.endPoint}/staff-type/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStafftype(id, body) {
    this.url = `${this.endPoint}/staff-type/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchStafftype() {
    this.url = `${this.endPoint}/staff-type/`;
    return this.http.get(this.url);
  }
  fetchStafftypeBy(id) {
    this.url = `${this.endPoint}/staff-type/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

// staff-role
  public getStaffrole() {
    this.url = `${this.endPoint}/staff-role`;
    return this.http.get(this.url);
  }

  public addStaffrole(newStaffRole: { }) {
    this.url = `${this.endPoint}/staff-role/add`;
    return this.http.post(this.url, newStaffRole);
  }

  public deleteStaffrole(id) {
    this.url = `${this.endPoint}/staff-role/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStaffrole(id, body) {
    this.url = `${this.endPoint}/staff-role/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchStaffrole() {
    this.url = `${this.endPoint}/staff-role/`;
    return this.http.get(this.url);
  }
  fetchStaffroleBy(id) {
    this.url = `${this.endPoint}/staff-role/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // pay-type
  public getPaytype() {
    this.url = `${this.endPoint}/pay-type`;
    return this.http.get(this.url);
  }

  public addPaytype(newPayType: { }) {
    this.url = `${this.endPoint}/pay-type/add`;
    return this.http.post(this.url, newPayType);
  }

  public deletePaytype(id) {
    this.url = `${this.endPoint}/pay-type/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updatePaytype(id, body) {
    this.url = `${this.endPoint}/pay-type/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchPaytype() {
    this.url = `${this.endPoint}/pay-type/`;
    return this.http.get(this.url);
  }
  fetchPaytypeBy(id) {
    this.url = `${this.endPoint}/pay-type/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // salutation
  public getSalutation() {
    this.url = `${this.endPoint}/salutation`;
    return this.http.get(this.url);
  }

  public addSalutation(newSalutation: { salutation: any; }) {
    this.url = `${this.endPoint}/salutation/add`;
    return this.http.post(this.url, newSalutation);
  }

  public deleteSalutation(id) {
    this.url = `${this.endPoint}/salutation/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateSalutation(id, body) {
    this.url = `${this.endPoint}/salutation/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchSalutation() {
    this.url = `${this.endPoint}/salutation/`;
    return this.http.get(this.url);
  }
  fetchSalutationBy(id) {
    this.url = `${this.endPoint}/salutation/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // gender
  public getGender() {
    this.url = `${this.endPoint}/gender`;
    return this.http.get(this.url);
  }

  public addGender(newGender: { gender: any; }) {
    this.url = `${this.endPoint}/gender/add`;
    return this.http.post(this.url, newGender);
  }

  public deleteGender(id) {
    this.url = `${this.endPoint}/gender/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateGender(id, body) {
    this.url = `${this.endPoint}/gender/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchGender() {
    this.url = `${this.endPoint}/gender/`;
    return this.http.get(this.url);
  }
  fetchGenderBy(id) {
    this.url = `${this.endPoint}/gender/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

    // marital-status
    public getMaritalstatus() {
      this.url = `${this.endPoint}/marital-status`;
      return this.http.get(this.url);
    }

    public addMaritalstatus(newMaritalstatus: { maritalstatus: any; }) {
      this.url = `${this.endPoint}/marital-status/add`;
      return this.http.post(this.url, newMaritalstatus);
    }

    public deleteMaritalstatus(id) {
      this.url = `${this.endPoint}/marital-status/delete?id=`+ id;
      return this.http.delete(this.url);
    }

    updateMaritalstatus(id, body) {
      this.url = `${this.endPoint}/marital-status/update?id=${id}`;
      return this.http.put(this.url, body);
    }

    fetchMaritalstatus() {
      this.url = `${this.endPoint}/marital-status/`;
      return this.http.get(this.url);
    }
    fetchMaritalstatusBy(id) {
      this.url = `${this.endPoint}/marital-status/fetchdata?id=` + id;
      return this.http.get(this.url);
    }

     // department
  public getDepartment() {
    this.url = `${this.endPoint}/department/aggregation`;
    return this.http.get(this.url);
  }

  public addDepartment(newDepartment: { institution: any; department: any; }) {
    this.url = `${this.endPoint}/department/add`;
    return this.http.post(this.url, newDepartment);
  }

  public deleteDepartment(id) {
    this.url = `${this.endPoint}/department/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  public getDetartmentbyIns(institution) {
    this.url = `${this.endPoint}/department/fetchbyIns/?institution=` + institution;
    return this.http.get(this.url);
  }


  updateDepartment(id, body) {
    this.url = `${this.endPoint}/department/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchDepartment() {
    this.url = `${this.endPoint}/department/`;
    return this.http.get(this.url);
  }
  fetchDepartmentBy(id) {
    this.url = `${this.endPoint}/department/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

     // fee-type
  public getFeetype() {
    this.url = `${this.endPoint}/fee-type`;
    return this.http.get(this.url);
  }

  public addFeetype(newFeeType: { }) {
    this.url = `${this.endPoint}/fee-type/add`;
    return this.http.post(this.url, newFeeType);
  }

  public deleteFeetype(id) {
    this.url = `${this.endPoint}/fee-type/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateFeetype(id, body) {
    this.url = `${this.endPoint}/fee-type/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchFeetype() {
    this.url = `${this.endPoint}/fee-type/`;
    return this.http.get(this.url);
  }
  fetchFeetypeBy(id) {
    this.url = `${this.endPoint}/fee-type/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

     // mode-of-enquiry
     public getModeofenquiry() {
      this.url = `${this.endPoint}/mode-of-enquiry`;
      return this.http.get(this.url);
    }

    public addModeofenquiry(newModeOfEnquiry: { }) {
      this.url = `${this.endPoint}/mode-of-enquiry/add`;
      return this.http.post(this.url, newModeOfEnquiry);
    }

    public deleteModeofenquiry(id) {
      this.url = `${this.endPoint}/mode-of-enquiry/delete?id=`+ id;
      return this.http.delete(this.url);
    }

    updateModeofenquiry(id, body) {
      this.url = `${this.endPoint}/mode-of-enquiry/update?id=${id}`;
      return this.http.put(this.url, body);
    }

    fetchModeofenquiry() {
      this.url = `${this.endPoint}/mode-of-enquiry/`;
      return this.http.get(this.url);
    }
    fetchModeofenquiryBy(id) {
      this.url = `${this.endPoint}/mode-of-enquiry/fetchdata?id=` + id;
      return this.http.get(this.url);
    }
    // Qualification-Type
    public getQualificationType() {
      this.url = `${this.endPoint}/qualification-type`;
      return this.http.get(this.url);
    }

    public addQualificationType(newModeOfEnquiry: { }) {
      this.url = `${this.endPoint}/qualification-type/add`;
      return this.http.post(this.url, newModeOfEnquiry);
    }

    public deleteQualificationType(id) {
      this.url = `${this.endPoint}/qualification-type/delete?id=`+ id;
      return this.http.delete(this.url);
    }

    updateQualificationType(id, body) {
      this.url = `${this.endPoint}/qualification-type/update?id=${id}`;
      return this.http.put(this.url, body);
    }

    fetchQualificationType() {
      this.url = `${this.endPoint}/qualification-type/`;
      return this.http.get(this.url);
    }
    fetchQualificationTypeById(id) {
      this.url = `${this.endPoint}/qualification-type/fetchdata?id=` + id;
      return this.http.get(this.url);
    }
     // driver
  public getDriver() {
    this.url = `${this.endPoint}/driver/aggregation`;
    return this.http.get(this.url);
  }

  public addDriver(newDriver: { }) {
    this.url = `${this.endPoint}/driver/add`;
    return this.http.post(this.url, newDriver);
  }

  public deleteDriver(id) {
    this.url = `${this.endPoint}/driver/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateDriver(id, body) {
    this.url = `${this.endPoint}/driver/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchDriver() {
    this.url = `${this.endPoint}/driver/`;
    return this.http.get(this.url);
  }
  fetchDriverBy(id) {
    this.url = `${this.endPoint}/driver/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

   // Vehicle
   public getVehicle() {
    this.url = `${this.endPoint}/vehicle/aggregation`;
    return this.http.get(this.url);
  }

  public addVehicle(newVehicle) {
    this.url = `${this.endPoint}/vehicle/add`;
    return this.http.post(this.url, newVehicle);
  }

  public deleteVehicle(id) {
    this.url = `${this.endPoint}/vehicle/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateVehicle(id, body) {
    this.url = `${this.endPoint}/vehicle/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchVehicle() {
    this.url = `${this.endPoint}/vehicle/`;
    return this.http.get(this.url);
  }
  fetchVehicleBy(id) {
    this.url = `${this.endPoint}/vehicle/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

    // vehicle expenses
    public getExpenseType() {
      this.url = `${this.endPoint}/vehicle-expenses/aggregation`;
      return this.http.get(this.url);
    }

    public getExpense() {
      this.url = `${this.endPoint}/vehicle-expenses`;
      return this.http.get(this.url);
    }

    public addExpense(newExpense: { expense: any; }) {
      this.url = `${this.endPoint}/vehicle-expenses/add`;
      return this.http.post(this.url, newExpense);
    }

    public deleteExpense(id) {
      this.url = `${this.endPoint}/vehicle-expenses/delete?id=`+ id;
      return this.http.delete(this.url);
    }

    updateExpense(id, body) {
      this.url = `${this.endPoint}/vehicle-expenses/update?id=${id}`;
      return this.http.put(this.url, body);
    }

    fetchExpense() {
      this.url = `${this.endPoint}/vehicle-expenses/`;
      return this.http.get(this.url);
    }
    fetchExpenseBy(id) {
      this.url = `${this.endPoint}/vehicle-expenses/fetchdata?id=` + id;
      return this.http.get(this.url);
    }

  // Filling Stations
  public getStation() {
    this.url = `${this.endPoint}/filling-stations`;
    return this.http.get(this.url);
  }

  public addStation(newStation: { }) {
    this.url = `${this.endPoint}/filling-stations/add`;
    return this.http.post(this.url, newStation);
  }

  public deleteStation(id) {
    this.url = `${this.endPoint}/filling-stations/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStation(id, body) {
    this.url = `${this.endPoint}/filling-stations/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchStation() {
    this.url = `${this.endPoint}/filling-stations/`;
    return this.http.get(this.url);
  }
  fetchStationBy(id) {
    this.url = `${this.endPoint}/filling-stations/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // stage-details
  public getStage() {
    this.url = `${this.endPoint}/stage-details/`;
    return this.http.get(this.url);
  }

  public getStagebyId(IdValue) {
    this.url = `${this.endPoint}/stage-details/fetchbyVehicleId?IdValue=` + IdValue;
    return this.http.get(this.url);
  }

  public addStageDetails(newStage) {
    this.url = `${this.endPoint}/stage-details/add`;
    return this.http.post(this.url, newStage);
  }

  public deleteStage(id) {
    this.url = `${this.endPoint}/stage-details/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStage(stageid, body) {
    this.url = `${this.endPoint}/stage-details/update?id=${stageid}`;
    return this.http.put(this.url, body);
  }

  fetchStage() {
    this.url = `${this.endPoint}/stage-details/`;
    return this.http.get(this.url);
  }
  fetchStageBy(id) {
    this.url = `${this.endPoint}/stage-details/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // staff profile
  public getStaffProfile() {
    this.url = `${this.endPoint}/staff-profile/aggregation`;
    return this.http.get(this.url);
  }

  public getStaffProfileByDep(department) {
    this.url = `${this.endPoint}/staff-profile/fetchbyDepartment?department=` + department;
    return this.http.get(this.url);
  }

  public getStaffProfileByIns(institution) {
    this.url = `${this.endPoint}/staff-profile/fetchbyInstitution?institution=` + institution;
    return this.http.get(this.url);
  }



  public addStaffProfile(newStaffProfile) {
    this.url = `${this.endPoint}/staff-profile/add`;
    return this.http.post(this.url, newStaffProfile);
  }

  fetchSaffProfile() {
    this.url = `${this.endPoint}/staff-profile/`;
    return this.http.get(this.url);
  }


  // staff details
  public getStaffDetails() {
    this.url = `${this.endPoint}/staff-profile/aggregation`;
    return this.http.get(this.url);
  }

  public getStaffProfilebyIdValue(id) {
    this.url = `${this.endPoint}/staff-profile/fetchbyStaffProfileId?id=` + id;
    return this.http.get(this.url);
  }

  updateStaffProfile(id, body) {
    this.url = `${this.endPoint}/staff-profile/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchSaffProfileBy(id) {
    this.url = `${this.endPoint}/staff-profile/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // staff contact

  public getStaffContactById(id) {
    this.url = `${this.endPoint}/staffContact/fetchcontact?id=` + id;
    return this.http.get(this.url);
  }

  public addStaffContact(newstaffContact) {
    this.url = `${this.endPoint}/staffContact/add`;
    return this.http.post(this.url,newstaffContact);
  }

  public deleteStaffContact(id) {
    this.url = `${this.endPoint}/staffContact/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStaffContact(id, body) {
    this.url = `${this.endPoint}/staffContact/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchStaffContact() {
    this.url = `${this.endPoint}/staffContact`;
    return this.http.get(this.url);
  }
  fetchStaffContactById(id) {
    this.url = `${this.endPoint}/staffContact/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // staff identity

  public getStaffIdentityById(id) {
    this.url = `${this.endPoint}/staffIdentity/fetchidentity?id=` + id;
    return this.http.get(this.url);
  }

  public addStaffIdentity(newstaffIdentity) {
    this.url = `${this.endPoint}/staffIdentity/add`;
    return this.http.post(this.url,newstaffIdentity);
  }

  public deleteStaffIdentity(id) {
    this.url = `${this.endPoint}/staffIdentity/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStaffIdentity(id, body) {
    this.url = `${this.endPoint}/staffIdentity/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchStaffIdentity() {
    this.url = `${this.endPoint}/staffIdentity`;
    return this.http.get(this.url);
  }
  fetchStaffIdentityById(id) {
    this.url = `${this.endPoint}/staffIdentity/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // Work Profile
  fetchStaffWorkProfileById(id) {
    this.url = `${this.endPoint}/staff-profile/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  updateStaffWorkProfile(id, body) {
    this.url = `${this.endPoint}/staff-profile/update?id=${id}`;
    return this.http.put(this.url, body);
  }
  public getStaffWorkprofilebyIdValue(id) {
    this.url = `${this.endPoint}/staff-profile/fetchbyStaffProfileId?id=` + id;
    return this.http.get(this.url);
  }

  // staff experience

  public getStaffExperienceById(id) {
    this.url = `${this.endPoint}/staffExperience/fetchexperience?id=` + id;
    return this.http.get(this.url);
  }

  public addStaffExperience(newstaffExperience) {
    this.url = `${this.endPoint}/staffExperience/add`;
    return this.http.post(this.url,newstaffExperience);
  }

  public deleteStaffExperience(id) {
    this.url = `${this.endPoint}/staffExperience/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStaffExperience(id, body) {
    this.url = `${this.endPoint}/staffExperience/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchStaffExperience() {
    this.url = `${this.endPoint}/staffExperience`;
    return this.http.get(this.url);
  }
  fetchStaffExperienceById(id) {
    this.url = `${this.endPoint}/staffExperience/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // staff education

  public getStaffEducationById(id) {
    this.url = `${this.endPoint}/staffEducation/fetcheducation?id=` + id;
    return this.http.get(this.url);
  }

  public addStaffEducation(newstaffEducation) {
    this.url = `${this.endPoint}/staffEducation/add`;
    return this.http.post(this.url,newstaffEducation);
  }

  public deleteStaffEducation(id) {
    this.url = `${this.endPoint}/staffEducation/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStaffEducation(id, body) {
    this.url = `${this.endPoint}/staffEducation/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchStaffEducation() {
    this.url = `${this.endPoint}/staffEducation`;
    return this.http.get(this.url);
  }
  fetchStaffEducationById(id) {
    this.url = `${this.endPoint}/staffEducation/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // staff course

  public getStaffCourseById(id) {
    this.url = `${this.endPoint}/staffCourse/fetchcourse?id=` + id;
    return this.http.get(this.url);
  }

  public addStaffCourse(newstaffCourse) {
    this.url = `${this.endPoint}/staffCourse/add`;
    return this.http.post(this.url,newstaffCourse);
  }

  public deleteStaffCourse(id) {
    this.url = `${this.endPoint}/staffCourse/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateStaffCourse(id, body) {
    this.url = `${this.endPoint}/staffCourse/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchStaffCourse() {
    this.url = `${this.endPoint}/staffCourse`;
    return this.http.get(this.url);
  }
  fetchStaffCourseById(id) {
    this.url = `${this.endPoint}/staffCourse/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // Expenses Entry

  public getExpensesEntry() {
    this.url = `${this.endPoint}/expenses-entry/aggregation`;
    return this.http.get(this.url);
  }

  public getvehicleExpenseReport(vehicleNo) {
    this.url = `${this.endPoint}/expenses-entry/getExpenseReportbyVehicle?vehicleNo=` + vehicleNo;
    return this.http.get(this.url);
  }

  public fetchExpenseReportbyDate(filterReportbyDate) {
   // console.log('service',ExpenseReportdata);
    this.url = `${this.endPoint}/expenses-entry/fetchExpenseReportbyDate`;
    return this.http.post(this.url,filterReportbyDate);
  }

  public addExpensesEntry(newExpenses) {
    this.url = `${this.endPoint}/expenses-entry/add`;
    return this.http.post(this.url,newExpenses);
  }

  public deleteExpensesEntry(id) {
    this.url = `${this.endPoint}/expenses-entry/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateExpensesEntry(id, body) {
    this.url = `${this.endPoint}/expenses-entry/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchExpensesEntry() {
    this.url = `${this.endPoint}/expenses-entry`;
    return this.http.get(this.url);
  }
  fetchExpensesEntryById(id) {
    this.url = `${this.endPoint}/expenses-entry/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  public getExpensesbyDate(date) {
    this.url = `${this.endPoint}/expenses-entry/fetchbyDate?date=` + date;
    return this.http.get(this.url);
  }

  // Fuel Entry

  public getFuelEntry() {
    this.url = `${this.endPoint}/fuel-entry/aggregation`;
    return this.http.get(this.url);
  }

  public getvehicleFuelReport(VehicleNo) {
    this.url = `${this.endPoint}/fuel-entry/fetchFuelReportbyVehicle?fuelVehicleNo=` + VehicleNo;
    return this.http.get(this.url);
  }

  public getRecentOpeningKms(VehicleNo) {
    this.url = `${this.endPoint}/fuel-entry/fetchOpenKMSbyVehicle?vehicleno=` + VehicleNo;
    return this.http.get(this.url);
  }

  public addFuelEntry(newFuel) {
    this.url = `${this.endPoint}/fuel-entry/add`;
    return this.http.post(this.url,newFuel);
  }
  public fetchFuelReport(VehicleNo) {
    this.url = `${this.endPoint}/fuel-entry/fetchOpenKMSbyVehicle?vehicleno=` + VehicleNo;
    return this.http.get(this.url);
  }

  public fetchFuelReportbyDate(FuelReportdate) {
    console.log('service',FuelReportdate);
    this.url = `${this.endPoint}/fuel-entry/fetchFuelReportbyDate`;
    return this.http.post(this.url,FuelReportdate);
  }

  public deleteFuelEntry(id) {
    this.url = `${this.endPoint}/fuel-entry/delete?id=`+ id;
    return this.http.delete(this.url);
  }

  updateFuelEntry(id, body) {
    this.url = `${this.endPoint}/fuel-entry/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchFuelEntry() {
    this.url = `${this.endPoint}/fuel-entry`;
    return this.http.get(this.url);
  }
  fetchFuelEntryById(id) {
    this.url = `${this.endPoint}/fuel-entry/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // CandiadateEnquiry - BasicDetails
  public getBasicDetails() {
    this.url = `${this.endPoint}/ce-basicdetails/aggregation`;
    return this.http.get(this.url);
  }

  public addBasicDetails(newCandidateDetails) {
    this.url = `${this.endPoint}/ce-basicdetails/add`;
    return this.http.post(this.url, newCandidateDetails);
  }

  public deleteBasicDetails(id) {
    this.url = `${this.endPoint}/ce-basicdetails/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateBasicDetails(id, body) {
    this.url = `${this.endPoint}/ce-basicdetails/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchBasicDetails() {
    this.url = `${this.endPoint}/ce-basicdetails/`;
    return this.http.get(this.url);
  }
  fetchBasicDetailsById(id) {
    this.url = `${this.endPoint}/ce-basicdetails/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  public fetchReportbyDate(filterReportbyDate) {
     this.url = `${this.endPoint}/ce-basicdetails/fetchReportbyDate`;
     return this.http.post(this.url,filterReportbyDate);
   }

  // CandiadateEnquiry - AddressDetails
  public getAddressDetails() {
    this.url = `${this.endPoint}/ce-addressdetails/aggregation`;
    return this.http.get(this.url);
  }

  public addAddressDetails(newadressdetails: {}) {
    this.url = `${this.endPoint}/ce-addressdetails/add`;
    return this.http.post(this.url, newadressdetails);
  }

  public deleteAddressDetails(id) {
    this.url = `${this.endPoint}/ce-addressdetails/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateAddressDetails(id, body) {
    this.url = `${this.endPoint}/ce-addressdetails/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchAddressDetails() {
    this.url = `${this.endPoint}/ce-addressdetails/`;
    return this.http.get(this.url);
  }
  fetchAddressDetailsById(id) {
    this.url = `${this.endPoint}/ce-addressdetails/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  getAddressDetailsById(canId) {
    this.url = `${this.endPoint}/ce-addressdetails/fetchaddress?canId=` + canId;
    return this.http.get(this.url);
  }
  // CandiadateEnquiry - PaymentDetails
  public getPaymentDetails() {
    this.url = `${this.endPoint}/ce-paymentdetails/aggregation`;
    return this.http.get(this.url);
  }

  public addPaymentDetails(newadressdetails: {}) {
    this.url = `${this.endPoint}/ce-paymentdetails/add`;
    return this.http.post(this.url, newadressdetails);
  }

  public deletePaymentDetails(id) {
    this.url = `${this.endPoint}/ce-paymentdetails/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updatePaymentDetails(id, body) {
    this.url = `${this.endPoint}/ce-paymentdetails/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchPaymentDetails() {
    this.url = `${this.endPoint}/ce-paymentdetails/`;
    return this.http.get(this.url);
  }
  fetchPaymentDetailsById(id) {
    this.url = `${this.endPoint}/ce-paymentdetails/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  getPaymentDetailsById(canId) {
    this.url = `${this.endPoint}/ce-paymentdetails/fetchpayment?canId=` + canId;
    return this.http.get(this.url);
  }

  // CandiadateEnquiry - Followups
  public getFollowups() {
    this.url = `${this.endPoint}/ce-followups/`;
    return this.http.get(this.url);
  }

  public addFollowups(newfollowups: {}) {
    this.url = `${this.endPoint}/ce-followups/add`;
    return this.http.post(this.url, newfollowups);
  }

  public deleteFollowups(id) {
    this.url = `${this.endPoint}/ce-followups/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateFollowups(id, body) {
    this.url = `${this.endPoint}/ce-followups/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchFollowups() {
    this.url = `${this.endPoint}/ce-followups/`;
    return this.http.get(this.url);
  }
  fetchFollowupsById(id) {
    this.url = `${this.endPoint}/ce-followups/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  // getFollowupsById(canId) {
  //   this.url = `${this.endPoint}/ce-followups/fetchfollowups?canId=` + canId;
  //   return this.http.get(this.url);
  // }
  getFollowupsById(canId) {
    this.url = `${this.endPoint}/ce-followups/fetchfollowups?canId=` + canId;
    return this.http.get(this.url);
  }
  // CandiadateEnquiry - qualificationDetails
  public getQualificationDetails() {
    this.url = `${this.endPoint}/ce-qualificationdetails/aggregation`;
    return this.http.get(this.url);
  }

  public addQualificationDetails(newadressdetails: {}) {
    this.url = `${this.endPoint}/ce-qualificationdetails/add`;
    return this.http.post(this.url, newadressdetails);
  }

  public deleteQualificationDetails(id) {
    this.url = `${this.endPoint}/ce-qualificationdetails/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateQualificationDetails(id, body) {
    this.url = `${this.endPoint}/ce-qualificationdetails/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchQualificationDetails() {
    this.url = `${this.endPoint}/ce-qualificationdetails/`;
    return this.http.get(this.url);
  }
  fetchQualificationById(id) {
    this.url = `${this.endPoint}/ce-qualificationdetails/fetchdata?id=` + id;
    return this.http.get(this.url);
  }
  getQualificationDetailsById(canId) {
    this.url = `${this.endPoint}/ce-qualificationdetails/fetchqualification?canId=` + canId;
    return this.http.get(this.url);
  }
    // CandiadateEnquiry - ConvertToStudnet
    public getConvertToStudent() {
      this.url = `${this.endPoint}/ce-converttostudent/aggregation`;
      return this.http.get(this.url);
    }

    public addConvertToStudent(newadressdetails: {}) {
      this.url = `${this.endPoint}/ce-converttostudent/add`;
      return this.http.post(this.url, newadressdetails);
    }

    public deleteConvertToStudent(id) {
      this.url = `${this.endPoint}/ce-converttostudent/delete?id=` + id;
      return this.http.delete(this.url);
    }

    updateConvertToStudent(id, body) {
      this.url = `${this.endPoint}/ce-converttostudent/update?id=${id}`;
      return this.http.put(this.url, body);
    }

    fetchConvertToStudent() {
      this.url = `${this.endPoint}/ce-converttostudent/`;
      return this.http.get(this.url);
    }
    fetchConvertToStudentById(id) {
      this.url = `${this.endPoint}/ce-converttostudent/fetchdata?id=` + id;
      return this.http.get(this.url);
    }
    getConvertToStudentById(canId) {
      this.url = `${this.endPoint}/ce-converttostudent/fetchconvert?canId=` + canId;
      return this.http.get(this.url);
    }
  // CandiadateEnquiry - CourseProgram
  public getCEcourseprogram() {
    this.url = `${this.endPoint}/addCEcourseProgram/aggregation`;
    return this.http.get(this.url);
  }

  public addCEcourseprogram(newadressdetails: {}) {
    this.url = `${this.endPoint}/addCEcourseProgram/add`;
    return this.http.post(this.url, newadressdetails);
  }

  public deleteCEcourseprogram(id) {
    this.url = `${this.endPoint}/addCEcourseProgram/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateCEcourseprogram(id, body) {
    this.url = `${this.endPoint}/addCEcourseProgram/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchCEcourseprogram() {
    this.url = `${this.endPoint}/addCEcourseProgram/aggregation`;
    return this.http.get(this.url);
  }
  getCEcourseprogramById(canId) {
    this.url = `${this.endPoint}/addCEcourseProgram/fetchCECouPro?canId=` + canId;
    return this.http.get(this.url);
  }


  public getAdmissionCategoryByIns(institution) {
    this.url = `${this.endPoint}/admissionCategory/fetchbyIns/?institution=` + institution;
    return this.http.get(this.url);
  }


public getCourseProbycourCat(coursecategory) {
    this.url = `${this.endPoint}/course-program/fetchByCouCate/?coursecategory=` + coursecategory;
    return this.http.get(this.url);
  }
  public getAdmissionTypeByIns(institution) {
    this.url = `${this.endPoint}/admission-type/fetchbyIns/?institution=` + institution;
    return this.http.get(this.url);
    }
// StudentManagment - StudentDetails
public getStudentDetails() {
  this.url = `${this.endPoint}/student-details/aggregation`;
  return this.http.get(this.url);
}

public addStudentDetails(newdetails: {}) {
  this.url = `${this.endPoint}/student-details/add`;
  return this.http.post(this.url, newdetails);
}

public convertToStudentDetail(newdetails: {}) {
  this.url = `${this.endPoint}/student-details/convert`;
  return this.http.post(this.url, newdetails);
}
public getStudentDetailByBatch(batch) {
  this.url = `${this.endPoint}/student-details/fetchbyBatch?batch=` + batch;
  return this.http.get(this.url);
}
public deleteStudentDetails(id) {
  this.url = `${this.endPoint}/student-details/delete?id=` + id;
  return this.http.delete(this.url);
}

updateStudentDetails(id, body) {
  this.url = `${this.endPoint}/student-details/update?id=${id}`;
  return this.http.put(this.url, body);
}

fetchStudentDetails() {
  this.url = `${this.endPoint}/student-details/`;
  return this.http.get(this.url);
}
fetchStudentDetailsById(id) {
  this.url = `${this.endPoint}/student-details/fetchbyId?id=` + id;
  return this.http.get(this.url);
}

// StudentManagment - StudentContact
public getStudentcontact() {
  this.url = `${this.endPoint}/student-contact/aggregation`;
  return this.http.get(this.url);
}

public addStudentcontact(newadressdetails: any) {
  this.url = `${this.endPoint}/student-contact/add`;
  return this.http.post(this.url, newadressdetails);
}

public deleteStudentcontact(id) {
  this.url = `${this.endPoint}/student-contact/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentcontact(id, body) {
  this.url = `${this.endPoint}/student-contact/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchStudentcontact() {
  this.url = `${this.endPoint}/student-contact/`;
  return this.http.get(this.url);
}
getStudentcontactById(stuId) {
  this.url = `${this.endPoint}/student-contact/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentcontactById(id) {
  this.url = `${this.endPoint}/student-contact/fetchdata?id=` + id;
  return this.http.get(this.url);
}
// StudentManagment - studentIdentity
public getStudentIdentity() {
  this.url = `${this.endPoint}/student-identity/aggregation`;
  return this.http.get(this.url);
}

public addStudentIdentity(newdetail: any) {
  this.url = `${this.endPoint}/student-identity/add`;
  return this.http.post(this.url, newdetail);
}

public deleteStudentIdentity(id) {
  this.url = `${this.endPoint}/student-identity/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentIdentity(id, body) {
  this.url = `${this.endPoint}/student-identity/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchStudentIdentity() {
  this.url = `${this.endPoint}/student-identity/`;
  return this.http.get(this.url);
}
getStudentIdentityById(stuId) {
  this.url = `${this.endPoint}/student-identity/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentIdentityById(id) {
  this.url = `${this.endPoint}/student-identity/fetchdata?id=` + id;
  return this.http.get(this.url);
}
// StudentManagment - studentMedicalInformation
getStudentMedical() {
  this.url = `${this.endPoint}/student-medicalinfo/aggregation`;
  return this.http.get(this.url);
}
addStudentMedical(newdetail: any) {
  this.url = `${this.endPoint}/student-medicalinfo/add`;
  return this.http.post(this.url, newdetail);
}
deleteStudentMedical(id) {
  this.url = `${this.endPoint}/student-medicalinfo/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentMedical(id, body) {
  this.url = `${this.endPoint}/student-medicalinfo/update?id=${id}`;
  return this.http.put(this.url, body);
}
getStudentMedicalById(stuId) {
  this.url = `${this.endPoint}/student-medicalinfo/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentMedicalById(id) {
  this.url = `${this.endPoint}/student-medicalinfo/fetchdata?id=` + id;
  return this.http.get(this.url);
}
// StudentManagment - studentIdentificationMarkDetails
getStudentIdentityMark() {
  this.url = `${this.endPoint}/student-identitymark/aggregation`;
  return this.http.get(this.url);
}
addStudentIdentityMark(newdetail: any) {
  this.url = `${this.endPoint}/student-identitymark/add`;
  return this.http.post(this.url, newdetail);
}
deleteStudentIdentityMark(id) {
  this.url = `${this.endPoint}/student-identitymark/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentIdentityMark(id, body) {
  this.url = `${this.endPoint}/student-identitymark/update?id=${id}`;
  return this.http.put(this.url, body);
}
getStudentIdentityMarkById(stuId) {
  this.url = `${this.endPoint}/student-identitymark/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentIdentityMarkById(id) {
  this.url = `${this.endPoint}/student-identitymark/fetchdata?id=` + id;
  return this.http.get(this.url);
}
// StudentManagment - studentQualification
getStudentQualification() {
  this.url = `${this.endPoint}/student-qualification/aggregation`;
  return this.http.get(this.url);
}
addStudentQualification(newdetail: any) {
  this.url = `${this.endPoint}/student-qualification/add`;
  return this.http.post(this.url, newdetail);
}
deleteStudentQualification(id) {
  this.url = `${this.endPoint}/student-qualification/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentQualification(id, body) {
  this.url = `${this.endPoint}/student-qualification/update?id=${id}`;
  return this.http.put(this.url, body);
}
getStudentQualificationById(stuId) {
  this.url = `${this.endPoint}/student-qualification/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentQualificationById(id) {
  this.url = `${this.endPoint}/student-qualification/fetchdata?id=` + id;
  return this.http.get(this.url);
}
// StudentManagment - studentCerificate
getStudentCerificate() {
  this.url = `${this.endPoint}/student-certificate/aggregation`;
  return this.http.get(this.url);
}
addStudentCerificate(newdetail: any) {
  this.url = `${this.endPoint}/student-certificate/add`;
  return this.http.post(this.url, newdetail);
}
deleteStudentCerificate(id) {
  this.url = `${this.endPoint}/student-certificate/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentCerificate(id, body) {
  this.url = `${this.endPoint}/student-certificate/update?id=${id}`;
  return this.http.put(this.url, body);
}
getStudentCerificateById(stuId) {
  this.url = `${this.endPoint}/student-certificate/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentCerificateById(id) {
  this.url = `${this.endPoint}/student-certificate/fetchdata?id=` + id;
  return this.http.get(this.url);
}
// StudentManagment - studentOthers
getStudentOther() {
  this.url = `${this.endPoint}/student-other/aggregation`;
  return this.http.get(this.url);
}
addStudentOther(newdetail: any) {
  this.url = `${this.endPoint}/student-other/add`;
  return this.http.post(this.url, newdetail);
}
deleteStudentOther(id) {
  this.url = `${this.endPoint}/student-other/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentOther(id, body) {
  this.url = `${this.endPoint}/student-other/update?id=${id}`;
  return this.http.put(this.url, body);
}
getStudentOtherById(stuId) {
  this.url = `${this.endPoint}/student-other/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentOtherById(id) {
  this.url = `${this.endPoint}/student-other/fetchdata?id=` + id;
  return this.http.get(this.url);
}
// StudentManagment - StudentGuardian
getStudentGuardian() {
  this.url = `${this.endPoint}/student-guardian/aggregation`;
  return this.http.get(this.url);
}
addStudentGuardian(newdetail: any) {
  this.url = `${this.endPoint}/student-guardian/add`;
  return this.http.post(this.url, newdetail);
}
deleteStudentGuardian(id) {
  this.url = `${this.endPoint}/student-guardian/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentGuardian(id, body) {
  this.url = `${this.endPoint}/student-guardian/update?id=${id}`;
  return this.http.put(this.url, body);
}
getStudentGuardianById(stuId) {
  this.url = `${this.endPoint}/student-guardian/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentGuardianById(id) {
  this.url = `${this.endPoint}/student-guardian/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// StudentManagment - StudentExtraCuricular
getStudentExtra() {
  this.url = `${this.endPoint}/student-extracur/aggregation`;
  return this.http.get(this.url);
}
addStudentExtra(newdetail: any) {
  this.url = `${this.endPoint}/student-extracur/add`;
  return this.http.post(this.url, newdetail);
}
deleteStudentExtra(id) {
  this.url = `${this.endPoint}/student-extracur/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentExtra(id, body) {
  this.url = `${this.endPoint}/student-extracur/update?id=${id}`;
  return this.http.put(this.url, body);
}
getStudentExtraById(stuId) {
  this.url = `${this.endPoint}/student-extracur/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
fetchStudentExtraById(id) {
  this.url = `${this.endPoint}/student-extracur/fetchdata?id=` + id;
  return this.http.get(this.url);
}

//Relationship
getRelationship() {
  this.url = `${this.endPoint}/relationship/`;
  return this.http.get(this.url);
}
addRelationship(newdetail: any) {
  this.url = `${this.endPoint}/relationship/add`;
  return this.http.post(this.url, newdetail);
}
deleteRelationship(id) {
  this.url = `${this.endPoint}/relationship/delete?id=` + id;
  return this.http.delete(this.url);
}
updateRelationship(id, body) {
  this.url = `${this.endPoint}/relationship/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchRelationshipById(id) {
  this.url = `${this.endPoint}/relationship/fetchdata?id=` + id;
  return this.http.get(this.url);
}

// student leave

public addStudentLeaveDetails(leaveDetails: {}) {
  this.url = `${this.endPoint}/student-leave/add`;
  return this.http.post(this.url, leaveDetails);
}
fetchleaveById(id) {
  this.url = `${this.endPoint}/student-leave/fetchdata?studentId=` + id;
  return this.http.get(this.url);
}

//ActivityCategory
getActivityCat() {
  this.url = `${this.endPoint}/activityCategory/`;
  return this.http.get(this.url);
}
addActivityCat(newdetail: any) {
  this.url = `${this.endPoint}/activityCategory/add`;
  return this.http.post(this.url, newdetail);
}
deleteActivityCat(id) {
  this.url = `${this.endPoint}/activityCategory/delete?id=` + id;
  return this.http.delete(this.url);
}
updateActivityCat(id, body) {
  this.url = `${this.endPoint}/activityCategory/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchActivityCatById(id) {
  this.url = `${this.endPoint}/activityCategory/fetchdata?id=` + id;
  return this.http.get(this.url);
}
//SubCategory
getSubCat() {
  this.url = `${this.endPoint}/subCategory/aggregation`;
  return this.http.get(this.url);
}
addSubCat(newdetail: any) {
  this.url = `${this.endPoint}/subCategory/add`;
  return this.http.post(this.url, newdetail);
}
deleteSubCat(id) {
  this.url = `${this.endPoint}/subCategory/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSubCat(id, body) {
  this.url = `${this.endPoint}/subCategory/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSubCatById(id) {
  this.url = `${this.endPoint}/subCategory/fetchdata?id=` + id;
  return this.http.get(this.url);
}
fetchSubCatByActCat(activityCate) {
  this.url = `${this.endPoint}/subCategory/fetchSubCat?activityCate=` + activityCate;
  return this.http.get(this.url);
}
//CertificateType
getCertificateType() {
  this.url = `${this.endPoint}/certificateType/`;
  return this.http.get(this.url);
}
addCertificateType(newdetail: any) {
  this.url = `${this.endPoint}/certificateType/add`;
  return this.http.post(this.url, newdetail);
}
deleteCertificateType(id) {
  this.url = `${this.endPoint}/certificateType/delete?id=` + id;
  return this.http.delete(this.url);
}
updateCertificateType(id, body) {
  this.url = `${this.endPoint}/certificateType/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchCertificateTypeById(id) {
  this.url = `${this.endPoint}/certificateType/fetchdata?id=` + id;
  return this.http.get(this.url);
}
//StudentManegment - CertificateType
getStudentCertificate() {
  this.url = `${this.endPoint}/student-certificate/aggregation`;
  return this.http.get(this.url);
}
addStudentCertificate(newdetail: any) {
  this.url = `${this.endPoint}/student-certificate/add`;
  return this.http.post(this.url, newdetail);
}
deleteStudentCertificate(id) {
  this.url = `${this.endPoint}/student-certificate/delete?id=` + id;
  return this.http.delete(this.url);
}
updateStudentCertificate(id, body) {
  this.url = `${this.endPoint}/student-certificate/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchStudentCertificateById(id) {
  this.url = `${this.endPoint}/student-certificate/fetchdata?id=` + id;
  return this.http.get(this.url);
}
getStudentCertificateById(stuId) {
  this.url = `${this.endPoint}/student-certificate/fetchbyId?stuId=` + stuId;
  return this.http.get(this.url);
}
//Hostel
getHostel() {
  this.url = `${this.endPoint}/hostel/aggregation`;
  return this.http.get(this.url);
}
addHostel(newdetail: any) {
  this.url = `${this.endPoint}/hostel/add`;
  return this.http.post(this.url, newdetail);
}
deleteHostel(id) {
  this.url = `${this.endPoint}/hostel/delete?id=` + id;
  return this.http.delete(this.url);
}
updateHostel(id, body) {
  this.url = `${this.endPoint}/hostel/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchHostelById(id) {
  this.url = `${this.endPoint}/hostel/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getHostelbyIns(institution) {
  this.url = `${this.endPoint}/hostel/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}

//SubjectType
getSubjectType() {
  this.url = `${this.endPoint}/subject-type/aggregation`;
  return this.http.get(this.url);
}
addSubjectType(newdetail: any) {
  this.url = `${this.endPoint}/subject-type/add`;
  return this.http.post(this.url, newdetail);
}
deleteSubjectType(id) {
  this.url = `${this.endPoint}/subject-type/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSubjectType(id, body) {
  this.url = `${this.endPoint}/subject-type/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSubjectTypeById(id) {
  this.url = `${this.endPoint}/subject-type/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getSubjectTypebyIns(institution) {
  this.url = `${this.endPoint}/subject-type/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}

//SubjectCategory
getSubjectCategory() {
  this.url = `${this.endPoint}/subject-category/aggregation`;
  return this.http.get(this.url);
}
addSubjectCategory(newdetail: any) {
  this.url = `${this.endPoint}/subject-category/add`;
  return this.http.post(this.url, newdetail);
}
deleteSubjectCategory(id) {
  this.url = `${this.endPoint}/subject-category/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSubjectCategory(id, body) {
  this.url = `${this.endPoint}/subject-category/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSubjectCategoryById(id) {
  this.url = `${this.endPoint}/subject-category/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getSubjectCategorybyIns(institution) {
  this.url = `${this.endPoint}/subject-category/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
//SubjectClassification
getSubjectClassification() {
  this.url = `${this.endPoint}/subject-classification/aggregation`;
  return this.http.get(this.url);
}
addSubjectClassification(newdetail: any) {
  this.url = `${this.endPoint}/subject-classification/add`;
  return this.http.post(this.url, newdetail);
}
deleteSubjectClassification(id) {
  this.url = `${this.endPoint}/subject-classification/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSubjectClassification(id, body) {
  this.url = `${this.endPoint}/subject-classification/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSubjectClassificationById(id) {
  this.url = `${this.endPoint}/subject-classification/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getSubjectClassificationbyIns(institution) {
  this.url = `${this.endPoint}/subject-classification/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
//Subject TopicCoverage
getTopicCoverage() {
  this.url = `${this.endPoint}/subject-topic-coverage/aggregation`;
  return this.http.get(this.url);
}
addTopicCoverage(newdetail: any) {
  this.url = `${this.endPoint}/subject-topic-coverage/add`;
  return this.http.post(this.url, newdetail);
}
deleteTopicCoverage(id) {
  this.url = `${this.endPoint}/subject-topic-coverage/delete?id=` + id;
  return this.http.delete(this.url);
}
updateTopicCoverage(id, body) {
  this.url = `${this.endPoint}/subject-topic-coverage/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchTopicCoverageById(id) {
  this.url = `${this.endPoint}/subject-topic-coverage/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getTopicCoveragebyIns(institution) {
  this.url = `${this.endPoint}/subject-topic-coverage/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
//Subject MarkDefinition
getMarkDefinition() {
  this.url = `${this.endPoint}/subject-mark-definition/aggregation`;
  return this.http.get(this.url);
}
addMarkDefinition(newdetail: any) {
  this.url = `${this.endPoint}/subject-mark-definition/add`;
  return this.http.post(this.url, newdetail);
}
deleteMarkDefinition(id) {
  this.url = `${this.endPoint}/subject-mark-definition/delete?id=` + id;
  return this.http.delete(this.url);
}
updateMarkDefinition(id, body) {
  this.url = `${this.endPoint}/subject-mark-definition/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchMarkDefinitionById(id) {
  this.url = `${this.endPoint}/subject-mark-definition/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getMarkDefinitionbyIns(institution) {
  this.url = `${this.endPoint}/subject-mark-definition/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
//Subject Internal Mark Category
getIntMarkCat() {
  this.url = `${this.endPoint}/subject-intMarkCat/aggregation`;
  return this.http.get(this.url);
}
addIntMarkCat(newdetail: any) {
  this.url = `${this.endPoint}/subject-intMarkCat/add`;
  return this.http.post(this.url, newdetail);
}
deleteIntMarkCat(id) {
  this.url = `${this.endPoint}/subject-intMarkCat/delete?id=` + id;
  return this.http.delete(this.url);
}
updateIntMarkCat(id, body) {
  this.url = `${this.endPoint}/subject-intMarkCat/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchIntMarkCatById(id) {
  this.url = `${this.endPoint}/subject-intMarkCat/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getIntMarkCatbyIns(institution) {
  this.url = `${this.endPoint}/subject-intMarkCat/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
public fetchIntMarkbymarkDef(markDefinition) {
  this.url = `${this.endPoint}/subject-intMarkCat/fetchByMarkDef?markDefinition=` + markDefinition;
  return this.http.get(this.url);
}
//Subject External Mark Category
getExtMarkCat() {
  this.url = `${this.endPoint}/subject-extMarkCat/aggregation`;
  return this.http.get(this.url);
}
addExtMarkCat(newdetail: any) {
  this.url = `${this.endPoint}/subject-extMarkCat/add`;
  return this.http.post(this.url, newdetail);
}
deleteExtMarkCat(id) {
  this.url = `${this.endPoint}/subject-extMarkCat/delete?id=` + id;
  return this.http.delete(this.url);
}
updateExtMarkCat(id, body) {
  this.url = `${this.endPoint}/subject-extMarkCat/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchExtMarkCatById(id) {
  this.url = `${this.endPoint}/subject-extMarkCat/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getExtMarkCatbyIns(institution) {
  this.url = `${this.endPoint}/subject-extMarkCat/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
public fetchExtMarkbymarkDef(markDefinition) {
  this.url = `${this.endPoint}/subject-extMarkCat/fetchByMarkDef?markDefinition=` + markDefinition;
  return this.http.get(this.url);
}

//Subject Add
getSubject(id) {
  this.url = `${this.endPoint}/subject-add/aggregation?id=` + id;
  return this.http.get(this.url);
}
addSubject(newdetail: any) {
  this.url = `${this.endPoint}/subject-add/add`;
  return this.http.post(this.url, newdetail);
}
deleteSubject(id) {
  this.url = `${this.endPoint}/subject-add/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSubject(id, body) {
  this.url = `${this.endPoint}/subject-add/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSubjectById(id) {
  this.url = `${this.endPoint}/subject-add/fetchdata?id=` + id;
  return this.http.get(this.url);
}
public getSubjectbyIns(institution) {
  this.url = `${this.endPoint}/subject-add/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
public fetchSubjectbymarkDef(markDefinition) {
  this.url = `${this.endPoint}/subject-add/fetchByMarkDef?markDefinition=` + markDefinition;
  return this.http.get(this.url);
}
public fetchByDepartment(department) {
  this.url = `${this.endPoint}/subject-add/fetchByDep/?department=` + department;
  return this.http.get(this.url);
}
public getSubjectbySem(semester) {
  this.url = `${this.endPoint}/subject-add/fetchbySem/?semester=` + semester;
  return this.http.get(this.url);
}
public getSubtbySem(semester) {
  this.url = `${this.endPoint}/subject-add/fetchsubBySem/?semester=` + semester;
  return this.http.get(this.url);
}
public fetchSubjectByDetails(filterSubject) {
   this.url = `${this.endPoint}/subject-add/fetchsubject`;
   return this.http.post(this.url,filterSubject);
 }


//Semester
getSemester() {
  this.url = `${this.endPoint}/semester/aggregation`;
  return this.http.get(this.url);
}
addSemester(newdetail: any) {
  this.url = `${this.endPoint}/semester/add`;
  return this.http.post(this.url, newdetail);
}
deleteSemester(id) {
  this.url = `${this.endPoint}/semester/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSemester(id, body) {
  this.url = `${this.endPoint}/semester/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSemesterById(id) {
  this.url = `${this.endPoint}/semester/fetchdata?id=` + id;
  return this.http.get(this.url);
}
 getSemesterbyIns(institution) {
  this.url = `${this.endPoint}/semester/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
getSemesterbyYear(academicYear) {
  this.url = `${this.endPoint}/semester/fetchbyAcademic/?academicYear=` + academicYear;
  return this.http.get(this.url);
}
//Subject Staff
getSubjectStaff() {
  this.url = `${this.endPoint}/subject-staff/aggregation`;
  return this.http.get(this.url);
}
addSubjectStaff(newdetail: any) {
  this.url = `${this.endPoint}/subject-staff/add`;
  return this.http.post(this.url, newdetail);
}
deleteSubjectStaff(id) {
  this.url = `${this.endPoint}/subject-staff/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSubjectStaff(id, body) {
  this.url = `${this.endPoint}/subject-staff/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSubjectStaffById(id) {
  this.url = `${this.endPoint}/subject-staff/fetchdata?id=` + id;
  return this.http.get(this.url);
}
 getSubjectStaffbyIns(institution) {
  this.url = `${this.endPoint}/subject-staff/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
public getStaffBySubject(subject) {
  this.url = `${this.endPoint}/subject-staff/fetchBySubject/?subject=` + subject;
  return this.http.get(this.url);
}
//Subject Syllabus
getSubjectSyllabus() {
  this.url = `${this.endPoint}/subject-syllabus/aggregation`;
  return this.http.get(this.url);
}
addSubjectSyllabus(newdetail: any) {
  this.url = `${this.endPoint}/subject-syllabus/add`;
  return this.http.post(this.url, newdetail);
}
deleteSubjectSyllabus(id) {
  this.url = `${this.endPoint}/subject-syllabus/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSubjectSyllabus(id, body) {
  this.url = `${this.endPoint}/subject-syllabus/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSubjectSyllabusById(id) {
  this.url = `${this.endPoint}/subject-syllabus/fetchdata?id=` + id;
  return this.http.get(this.url);
}
 getSubjectSyllabusbyIns(institution) {
  this.url = `${this.endPoint}/subject-syllabus/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
public getSyllabusBySubject(subject) {
  this.url = `${this.endPoint}/subject-syllabus/fetchBySubject/?subject=` + subject;
  return this.http.get(this.url);
}
//Section
getSection() {
  this.url = `${this.endPoint}/section/aggregation`;
  return this.http.get(this.url);
}
addSection(newdetail: any) {
  this.url = `${this.endPoint}/section/add`;
  return this.http.post(this.url, newdetail);
}
deleteSection(id) {
  this.url = `${this.endPoint}/section/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSection(id, body) {
  this.url = `${this.endPoint}/section/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchSectionById(id) {
  this.url = `${this.endPoint}/section/fetchdata?id=` + id;
  return this.http.get(this.url);
}
 getSectionbyIns(institution) {
  this.url = `${this.endPoint}/section/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
getSectionbycourseprogram(courseprogram) {
  this.url = `${this.endPoint}/section/fetchbycourseprogram/?courseprogram=` + courseprogram;
  return this.http.get(this.url);
}
getSemesterbyAcademicYear(academicYear) {
  this.url = `${this.endPoint}/semester/fetchbyAcademic/?academicYear=` + academicYear;
  return this.http.get(this.url);
}
getSectionbySemester(semester) {
  this.url = `${this.endPoint}/section/fetchbySemester/?semester=` + semester;
  return this.http.get(this.url);
}



//lectureplan

getlectureplan() {
  this.url = `${this.endPoint}/lecture-sub/aggregation`;
  return this.http.get(this.url);
}
addlectureplan(newdetail: any) {
  this.url = `${this.endPoint}/lecture-sub/add`;
  return this.http.post(this.url, newdetail);
}
deletelectureplan(id) {
  this.url = `${this.endPoint}/lecture-sub/delete?id=` + id;
  return this.http.delete(this.url);
}
updatelectureplan(id, body) {
  this.url = `${this.endPoint}/lecture-sub/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchlectureplanId(id) {
  this.url = `${this.endPoint}/lecture-sub/fetchdata?id=` + id;
  return this.http.get(this.url);
}
 getlectureplanbyIns(institution) {
  this.url = `${this.endPoint}/lecture-sub/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
getlectureplanbycourseprogram(courseprogram) {
  this.url = `${this.endPoint}/lecture-sub/fetchbycourseprogram/?courseprogram=` + courseprogram;
  return this.http.get(this.url);
}
getlectureplanbyAcademicYear(academicYear) {
  this.url = `${this.endPoint}/lecture-sub/fetchbyAcademic/?academicYear=` + academicYear;
  return this.http.get(this.url);
}
getlectureplanbySemester(semester) {
  this.url = `${this.endPoint}/lecture-sub/fetchbySemester/?semester=` + semester;
  return this.http.get(this.url);
}



//Staff-Section
getSectionStaff() {
  this.url = `${this.endPoint}/section-staff/aggregation`;
  return this.http.get(this.url);
}
addSectionStaff(newdetail: any) {
  this.url = `${this.endPoint}/section-staff/add`;
  return this.http.post(this.url, newdetail);
}
deleteSectionStaff(id) {
  this.url = `${this.endPoint}/section-staff/delete?id=` + id;
  return this.http.delete(this.url);
}
updateSectionStaff(id, body) {
  this.url = `${this.endPoint}/section-staff/update?id=${id}`;
  return this.http.put(this.url, body);
}
updateSectionStaff1(id, body) {
  this.url = `${this.endPoint}/section-staff/update1?section=${id}`;
  return this.http.put(this.url, body);
}
fetchSectionStaffById(id) {
  this.url = `${this.endPoint}/section-staff/fetchdata?id=` + id;
  return this.http.get(this.url);
}
 getSectionStaffbyIns(institution) {
  this.url = `${this.endPoint}/section-staff/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}
getSectionStaffbySec(section) {
  this.url = `${this.endPoint}/section-staff/fetchbySection?section=` + section;
  return this.http.get(this.url);
}
getSectionStaffbySubject(subject) {
  this.url = `${this.endPoint}/section-staff/fetchbySubject?subject=` + subject;
  return this.http.get(this.url);
}
//Period
getPeriod() {
  this.url = `${this.endPoint}/period`;
  return this.http.get(this.url);
}

fetchPeriods() {
  this.url = `${this.endPoint}/period/fetchPeriods`;
  return this.http.get(this.url);
}
addPeriod(newdetail: any) {
  this.url = `${this.endPoint}/period/add`;
  return this.http.post(this.url, newdetail);
}
deletePeriod(id) {
  this.url = `${this.endPoint}/period/delete?id=` + id;
  return this.http.delete(this.url);
}
updatePeriod(id, body) {
  this.url = `${this.endPoint}/period/update?id=${id}`;
  return this.http.put(this.url, body);
}
fetchPeriodById(id) {
  this.url = `${this.endPoint}/period/fetchdata?id=` + id;
  return this.http.get(this.url);
}
 getPeriodbyIns(institution) {
  this.url = `${this.endPoint}/period/fetchbyIns/?institution=` + institution;
  return this.http.get(this.url);
}

fetchweekdays() {
  this.url = `${this.endPoint}/weekDay/fetchweekdays`;
  return this.http.get(this.url);
}


addSubjecttoTimeTable(newPeriodData: any) {
  this.url = `${this.endPoint}/time-table/add`;
  return this.http.post(this.url, newPeriodData);
}

public getTimeTablebySec(filterSubjectStaff) {
  this.url = `${this.endPoint}/time-table/fetchSubjectStaff`;
  return this.http.post(this.url,filterSubjectStaff);
}


public filterSubExist(filterSubExist) {
  this.url = `${this.endPoint}/time-table/fetchSubjectExist`;
  return this.http.post(this.url,filterSubExist);
}

public filterPeriodSubject(filterPeriodExist) {
  this.url = `${this.endPoint}/time-table/filterPeriodExist`;
  return this.http.post(this.url,filterPeriodExist);
}

getStudentDetailsbySection(sectionId) {
  this.url = `${this.endPoint}/time-table/fetchStudentDetails?sectionId=` + sectionId;
  return this.http.get(this.url);
}

filterattendenceDayId(attendenceDay) {
  this.url = `${this.endPoint}/weekDay/fetchattendenceDayId?day=` + attendenceDay;
  return this.http.get(this.url);
}


deleteExistSubject(id) {
  //console.log('id',id);
  this.url = `${this.endPoint}/time-table/delete?id=` + id;
  return this.http.delete(this.url);
}


addStudentstoAttendenceEntry(newData: any) {
  console.log('newData',newData);
  this.url = `${this.endPoint}/studentAttendence/add`;
  return this.http.post(this.url, newData);
}

public filterStudentAttendenceEntryExist(filterAttendenceEntryExist) {
  this.url = `${this.endPoint}/studentAttendence/fetchAttendenceEntryExist`;
  return this.http.post(this.url,filterAttendenceEntryExist);
}

public fetchStudentAttendenceDetails2(filterAttendenceEntryExist) {
  this.url = `${this.endPoint}/studentAttendence/fetchStudentAttendenceDetails2`;
  return this.http.post(this.url,filterAttendenceEntryExist);
}
public fetchStudentmarkDetails2(filterAttendenceEntryExist) {
  this.url = `${this.endPoint}/section-staff/sectionbymark`;
  return this.http.post(this.url,filterAttendenceEntryExist);
}

public getStudentAttendenceDetails(attendenceDetails) {
  this.url = `${this.endPoint}/studentAttendence/fetchStudentAttendenceDetails`;
  return this.http.post(this.url, attendenceDetails);
}
public getStudentmarkDetails(attendenceDetails) {
  this.url = `${this.endPoint}/studentAttendence/fetchStudentmarkDetails2`;
  return this.http.post(this.url, attendenceDetails);
}

public getStudentmarkDetails2(attendenceDetails) {
  this.url = `${this.endPoint}/marks-ent/fetchStudentmarkDetails2`;
  return this.http.post(this.url, attendenceDetails);
}
fetchstudentList() {
  this.url = `${this.endPoint}/studentAttendence/fetchweekdays`;
  return this.http.get(this.url);
}

public getStudentAttendencebySec(filterStudentAttendence) {
  this.url = `${this.endPoint}/studentAttendence/fetchStudentAttendence`;
  return this.http.post(this.url,filterStudentAttendence);
}

public getAttendenceCountDetails(filterAttendence) {
  this.url = `${this.endPoint}/studentAttendence/fetchAttendence`;
  return this.http.post(this.url,filterAttendence);
}


public getPeriodSubjectStaff(filterSubjectStaff) {
  this.url = `${this.endPoint}/time-table/fetchPeriodSubjectStaff`;
  return this.http.post(this.url,filterSubjectStaff);
}



updateAttedenceDetails(id, body) {

  this.url = `${this.endPoint}/studentAttendence/update?id=${id}`;
  return this.http.put(this.url,body);

}


}
