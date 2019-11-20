import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  url: string;
  endPoint = 'http://localhost:3000';

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
  updateBatch(id, body) {
    this.url = `${this.endPoint}/batch/update?id=` + id, body;
    return this.http.put(this.url, body);
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
  public getCoursecategorybycourPro(coursecategory) {
    this.url = `${this.endPoint}/course-program/fetchByCouCate/?coursecategory=` + coursecategory;
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
  loadDriver() {
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
  loadVehicle() {
    this.url = `${this.endPoint}/institution/`;
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

public addStudentDetails(newadressdetails: {}) {
  this.url = `${this.endPoint}/student-details/add`;
  return this.http.post(this.url, newadressdetails);
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
public getBatchByDegree(degree) {
  this.url = `${this.endPoint}/batch/fetchByDeg/?degree=` + degree;
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
}
