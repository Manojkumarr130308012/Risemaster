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
    this.url = `${this.endPoint}/admission-type/aggregation`;
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
  loadCoursecategory() {
    this.url = `${this.endPoint}/institution/`;
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
loadInstitution() {
  this.url = `${this.endPoint}/institution/`;
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
  loadVehicle() {
    this.url = `${this.endPoint}/vehicle/`;
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
<<<<<<< HEAD
  
     // CandiadateEnquiry - BasicDetails
     public getBasicDetails() {
      this.url = `${this.endPoint}/ce-basicdetails/aggregation`;
      return this.http.get(this.url);   
    }
    
    public addBasicDetails(newModeOfEnquiry: { }) {
      this.url = `${this.endPoint}/ce-basicdetails/add`;   
      return this.http.post(this.url, newModeOfEnquiry);
    }
    
    public deleteBasicDetails(id) {
      this.url = `${this.endPoint}/ce-basicdetails/delete?id=`+ id;
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
     // CandiadateEnquiry - AddressDetails
     public getAddressDetails() {
      this.url = `${this.endPoint}/ce-addressdetails/aggregation`;
      return this.http.get(this.url);   
    }
    
    public addAddressDetails(newadressdetails: { }) {
      this.url = `${this.endPoint}/ce-addressdetails/add`;   
      return this.http.post(this.url, newadressdetails);
    }
    
    public deleteAddressDetails(id) {
      this.url = `${this.endPoint}/ce-addressdetails/delete?id=`+ id;
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
    loadAddressType() {
      this.url = `${this.endPoint}/addressType/`;
      return this.http.get(this.url);
    }

       // CandiadateEnquiry - PaymentDetails
    public getPaymentDetails() {
      this.url = `${this.endPoint}/ce-paymentdetails/aggregation`;
      return this.http.get(this.url);   
    }
    
    public addPaymentDetails(newpaymentdetails: { }) {
      this.url = `${this.endPoint}/ce-paymentdetails/add`;   
      return this.http.post(this.url, newpaymentdetails);
    }
    
    public deletePaymentDetails(id) {
      this.url = `${this.endPoint}/ce-paymentdetails/delete?id=`+ id;
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
    loadPaymentMethod() {
      this.url = `${this.endPoint}/ce-paymentdetails/`;
      return this.http.get(this.url);
    }

    // CandiadateEnquiry - Followups
    public getFollowups() {
      this.url = `${this.endPoint}/ce-followups`;
      return this.http.get(this.url);   
    }
    
    public addFollowups(newfollowups: { }) {
      this.url = `${this.endPoint}/ce-followups/add`;   
      return this.http.post(this.url, newfollowups);
    }
    
    public deleteFollowups(id) {
      this.url = `${this.endPoint}/ce-followups/delete?id=`+ id;
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

    // CandiadateEnquiry - Qualification Details
    // SSLC Details
    public getSSLCDetails() {
      this.url = `${this.endPoint}/ce-qd-sslcdetails`;
      return this.http.get(this.url);   
    }
    
    public addSSLCDetails(newssldetails: { }) {
      this.url = `${this.endPoint}/ce-qd-sslcdetails/add`;   
      return this.http.post(this.url, newssldetails);
    }
    // HSC Details
    public getHSCDetails() {
      this.url = `${this.endPoint}/ce-qd-hscdetails`;
      return this.http.get(this.url);   
    }
    
    public addHSCDetails(newssldetails: { }) {
      this.url = `${this.endPoint}/ce-qd-hscdetails/add`;   
      return this.http.post(this.url, newssldetails);
    }
    // Diploma Details
    public getDiplomaDetails() {
      this.url = `${this.endPoint}/ce-qd-diplomadetails`;
      return this.http.get(this.url);   
    }
    
    public addDiplomaDetails(newssldetails: { }) {
      this.url = `${this.endPoint}/ce-qd-diplomadetails/add`;   
      return this.http.post(this.url, newssldetails);
    }
    // Degree Details
    public getDegreeDetails() {
      this.url = `${this.endPoint}/ce-qd-degreedetails`;
      return this.http.get(this.url);   
    }
    
    public addDegreeDetails(newssldetails: { }) {
      this.url = `${this.endPoint}/ce-qd-degreedetails/add`;   
      return this.http.post(this.url, newssldetails);
    }
=======

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
  
  updateStage(id, body) {
    this.url = `${this.endPoint}/stage-details/update?id=${id}`;
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
>>>>>>> ee6756af74671aeefa8c0913d94ca8ee78ccfee1
}
