import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  url: string;
  endPoint = 'http://localhost:3000';

  //   const headers = new HttpHeaders({
  //    Authorization: this.storage.get('token')
  //  });

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
    this.url = `${this.endPoint}/academic-year`;
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

  fetchAcademicYear() {
    this.url = `${this.endPoint}/academic-year`;
    return this.http.get(this.url);

  }
  fetchAcademicyearById(id) {
    this.url = `${this.endPoint}/academic-year/fetchdata?id=` + id;
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

  // bloodgroup
  public getBloodgroup() {
    this.url = `${this.endPoint}/bloodgroup`;
    return this.http.get(this.url);
  }

  public addBloodgroup(newBloodgroup: { bloodgroup: any; }) {
    this.url = `${this.endPoint}/bloodgroup/add`;
    return this.http.post(this.url, newBloodgroup);
  }

  public deleteBloodgroup(id) {
    this.url = `${this.endPoint}/bloodgroup/delete?id=` + id;
    return this.http.delete(this.url);
  }

  updateBloodgroup(id, body) {
    this.url = `${this.endPoint}/bloodgroup/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  fetchBloodgroup() {
    this.url = `${this.endPoint}/bloodgroup/`;
    return this.http.get(this.url);
  }
  fetchBloodgroupBy(id) {
    this.url = `${this.endPoint}/bloodgroup/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  // admission-type
  public getAdmissiontype() {
    this.url = `${this.endPoint}/admission-type`;
    return this.http.get(this.url);
  }

  public addAdmissiontype(newAdmissiontype: { institution: any; admissiontype: any; }) {
    this.url = `${this.endPoint}/admission-type/add`;
    return this.http.post(this.url, newAdmissiontype);
  }

  public deleteAdmissiontype(id) {
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
  loadAdmissiontype() {
    this.url = `${this.endPoint}/institution/`;
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
  loadInstitution() {
    this.url = `${this.endPoint}/institution/`;
    return this.http.get(this.url);
  }


  // course-category
  public getCoursecategory() {
    this.url = `${this.endPoint}/course-category`;
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
  loadCoursecategory() {
    this.url = `${this.endPoint}/institution/`;
    return this.http.get(this.url);
  }

  // course-program
  public getCourseprogram() {
    this.url = `${this.endPoint}/course-program`;
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

  loadCourseprogram() {
    this.url = `${this.endPoint}/course-category`;
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
  this.url = `${this.endPoint}/courseType`;
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

// Degree
public getDegree() {
  this.url = `${this.endPoint}/degree`;
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
  this.url = `${this.endPoint}/bank`;
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
    this.url = `${this.endPoint}/department`;
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
  loadDepartment() {
    this.url = `${this.endPoint}/department/`;
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
}
