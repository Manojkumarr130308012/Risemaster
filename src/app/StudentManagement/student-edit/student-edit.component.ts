import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/uploadStudentPhoto/upload';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  degree:any;
  batch:any;
  rollNo: any;
  regNo: any;
  firstName: any;
  lastName: any;
  gender: any;
  dob: any;
  maritalStatus: any;
  mobileNo: any;
  bloodGroup: any;
  emailId: any;
  ffirstName: any;
  flastName: any;
  foccupation: any;
  fannualIncome: any;
  fmobileNo: any;
  mfirstName: any;
  mlastName: any;
  moccupation: any;
  mannualIncome: any;
  mmobileNo: any;
  nationality: any;
  religion: any;
  caste: any;
  community: any;
  admissionCategory: any;
  admissionType: any;
  financialCategory: any;
  boarding: any;
  boardingStartDate: any;
  applicationNo: any;
  admissionDate: any;
  admissionNo: any;
  joinDate: any;
  referalType: any;
  referal: any;
  motherTongue: any;
  secondLanguage: any;
  sPhoto: any;
  rollNoValue: any;
  regNoValue: any;
  firstNameValue: any;
  lastNameValue: any;
  genderValue: any;
  dobValue: any;
  maritalStatusValue: any;
  mobileNoValue: any;
  bloodGroupValue: any;
  emailIdValue: any;
  ffirstNameValue: any;
  flastNameValue: any;
  foccupationValue: any;
  fannualIncomeValue: any;
  fmobileNoValue: any;
  mfirstNameValue: any;
  mlastNameValue: any;
  moccupationValue: any;
  mannualIncomeValue: any;
  mmobileNoValue: any;
  nationalityValue: any;
  religionValue: any;
  casteValue: any;
  communityValue: any;
  admissionCategoryValue: any;
  admissionTypeValue: any;
  financialCategoryValue: any;
  boardingValue: any;
  boardingStartDateValue: any;
  applicationNoValue: any;
  admissionDateValue: any;
  admissionNoValue: any;
  joinDateValue: any;
  referalTypeValue: any;
  referalValue: any;
  motherTongueValue: any;
  secondLanguageValue: any;
  sPhotoValue: any;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  getfileLoc: any;
  studentDetails: Object;
  message: any;
  genders: any;
  nationalities: any;
  religions: any;
  communities: any;
  castes: any;
  admissiontypes: any;
  referralTypes: any;
  admissioncategories: any;
  motherTongues: any;
  secondLanguages: any;
  maritalstatuses: any;
  bloodgroups: any;
  firstGraduate: any;
  scholarshipApplicable: any;
  parentExServiceMan: any;
  minoritygroup: any;
  physicallyChallengedPerson: any;
  andhamanAndNicobarNative: any;
  fg: any;
  sa: any;
  pxsm: any; 
  mg: any;
  pcp: any;
  aan: any;
  institution: any;
  institutions: any;
  id: any;
  Id: any;
  editStudentDetails: any;
  IdValue: any;
  firstGraduateValue: FormControl;
  scholarshipApplicableValue: FormControl;
  parentExServiceManValue: FormControl;
  minoritygroupValue: FormControl;
  physicallyChallengedPersonValue: FormControl;
  andhamanAndNicobarNativeValue: FormControl;
  institutionValue: any;
  institutiond: any;
  admissioncategoriesbyIns: any;
  courseprogramValue: any;
  batchValue: any;
  paadharNO: FormControl;
  paadharNOValue: any;
  batches: any;
  courseprograms: any;
  courseprogramd: any;
  batchbydeg: any;
  coursecategoriesbyIns: any;
  batcheBycourseprograms: any;
  courseprogrambyIns: any;
  courseprogram: any;
  section: any;
  semester: any;
  semestersByIns: any;
  sectionByCoursePrograms: any;
  sectionValue: any;
  semesterValue: any;
  transportRoute: FormControl;
  hostel: FormControl;
  transportRouteValue: any;
  hostelValue: any;
  hostelByIns: any;
  constructor(
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
    })
    this.courseprogram = new FormControl({value:'', disabled: true});
    this.batch = new FormControl({value:'', disabled: true});
    this.rollNo = new FormControl('', Validators.required);
    this.regNo = new FormControl('');
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.maritalStatus = new FormControl();
    this.mobileNo = new FormControl('', Validators.required);
    this.bloodGroup = new FormControl();
    this.emailId = new FormControl('', Validators.required);
    this.ffirstName = new FormControl('');
    this.flastName = new FormControl('');
    this.foccupation = new FormControl('');
    this.fannualIncome = new FormControl('');
    this.fmobileNo = new FormControl('');
    this.paadharNO = new FormControl('');
    this.mfirstName = new FormControl('');
    this.mlastName = new FormControl('');
    this.moccupation = new FormControl('');
    this.mannualIncome = new FormControl('');
    this.mmobileNo = new FormControl('');
    this.nationality = new FormControl();
    this.religion = new FormControl();
    this.caste = new FormControl();
    this.community = new FormControl('', Validators.required);
    this.institution = new FormControl({value:'', disabled: true});
    this.admissionCategory = new FormControl('', Validators.required);
    this.admissionType = new FormControl('', Validators.required);
    this.financialCategory = new FormControl('', Validators.required);
    this.boarding = new FormControl('', Validators.required);
    this.boardingStartDate = new FormControl('');
    this.applicationNo = new FormControl('');
    this.admissionDate = new FormControl('');
    this.admissionNo = new FormControl('');
    this.joinDate = new FormControl('');
    this.referalType = new FormControl();
    this.referal = new FormControl('');
    this.motherTongue = new FormControl();
    this.secondLanguage = new FormControl();
    this.sPhoto = new FormControl('');
    this.firstGraduate = new FormControl();
    this.scholarshipApplicable = new FormControl();
    this.parentExServiceMan = new FormControl();
    this.minoritygroup = new FormControl();
    this.physicallyChallengedPerson = new FormControl();
    this.andhamanAndNicobarNative = new FormControl();
    this.section = new FormControl('', Validators.required);
    this.semester = new FormControl('', Validators.required);
    this.transportRoute = new FormControl();
    this.hostel = new FormControl();
     //Edit  Details
      this.onEditStudentDetail();
   
   }
     //to upload Photo
  submit() {
    this.uploader.uploadAll();
  }
  // Error Message 
  public setMessage(message) {
    return this.message = message;
  }
  firstGraduate1(event: any) {
    // console.log('FG', event);
    this.fg = event;
  }
  scholarshipApplicable1(event1: any) {
    // console.log('SA', event);
    this.sa = event1;
  }
  parentExServiceMan1(event2: any) {
    // console.log('PXSM', event);
    this.pxsm = event2;
  }
  minoritygroup1(event3: any) {
    // console.log('MG', event);
    this.mg = event3;
  }
  physicallyChallengedPerson1(event4: any) {
    // console.log('PCP', event);
    this.pcp = event4;
  }
  andhamanAndNicobarNative1(event5: any) {
    // console.log('AAN', event);
    this.aan = event5;
  }
  onEditStudentDetail() {
    this.Id = this.id;
    // console.log('ID', this.Id);
    this.request.fetchStudentDetailsById(this.Id).subscribe((response) => {
    this.editStudentDetails = response[0];
    // console.log('FetchStudentDetailsById',this.editStudentDetails);
    this.courseprogramValue = this.editStudentDetails.courseprogram;
    this.batchValue = this.editStudentDetails.batch;
    this.rollNoValue = this.editStudentDetails.rollNo;
    this.regNoValue = this.editStudentDetails.regNo;
    this.firstNameValue = this.editStudentDetails.firstName;
    this.lastNameValue = this.editStudentDetails.lastName;
    this.genderValue = this.editStudentDetails.gender;
    this.dobValue = this.editStudentDetails.dob;
    this.maritalStatusValue = this.editStudentDetails.maritalStatus;
    this.mobileNoValue = this.editStudentDetails.mobileNo;
    this.bloodGroupValue = this.editStudentDetails.bloodGroup;
    this.emailIdValue = this.editStudentDetails.emailId;
    this.ffirstNameValue = this.editStudentDetails.ffirstName;
    this.flastNameValue = this.editStudentDetails.flastName;
    this.foccupationValue = this.editStudentDetails.foccupation;
    this.fannualIncomeValue = this.editStudentDetails.fannualIncome;
    this.fmobileNoValue = this.editStudentDetails.fmobileNo;
    this.paadharNOValue = this.editStudentDetails.paadharNO;
    this.mfirstNameValue = this.editStudentDetails.mfirstName;
    this.mlastNameValue = this.editStudentDetails.mlastName;
    this.moccupationValue = this.editStudentDetails.moccupation;
    this.mannualIncomeValue = this.editStudentDetails.mannualIncome;
    this.mmobileNoValue = this.editStudentDetails.mmobileNo;
    this.nationalityValue = this.editStudentDetails.nationality;
    this.religionValue = this.editStudentDetails.religion;
    this.casteValue = this.editStudentDetails.caste;
    this.communityValue = this.editStudentDetails.community;
    this.institutionValue = this.editStudentDetails.institution;
    this.admissionCategoryValue = this.editStudentDetails.admissionCategory;
    this.admissionTypeValue = this.editStudentDetails.admissionType;
    this.financialCategoryValue = this.editStudentDetails.financialCategory;
    this.boardingValue = this.editStudentDetails.boarding;
    this.boardingStartDateValue = this.editStudentDetails.boardingStartDate;
    this.applicationNoValue = this.editStudentDetails.applicationNo;
    this.admissionDateValue = this.editStudentDetails.admissionDate;
    this.admissionNoValue = this.editStudentDetails.admissionNo;
    this.joinDateValue = this.editStudentDetails.joinDate;
    this.referalTypeValue = this.editStudentDetails.referalType;
    this.referalValue = this.editStudentDetails.referal;
    this.motherTongueValue = this.editStudentDetails.motherTongue;
    this.secondLanguageValue = this.editStudentDetails.secondLanguage;
    this.sectionValue = this.editStudentDetails.section;
    this.semesterValue = this.editStudentDetails.semester;
    this.transportRouteValue = this.editStudentDetails.transportRoute;
    this.hostelValue = this.editStudentDetails.hostel;
    this.sPhotoValue = this.editStudentDetails.sPhoto;
    this.firstGraduateValue = this.editStudentDetails.firstGraduate;
    this.scholarshipApplicableValue = this.editStudentDetails.scholarshipApplicable;
    this.parentExServiceManValue = this.editStudentDetails.parentExServiceMan;
    this.minoritygroupValue = this.editStudentDetails.minoritygroup;
    this.physicallyChallengedPersonValue = this.editStudentDetails.physicallyChallengedPerson;
    this.andhamanAndNicobarNativeValue = this.editStudentDetails.andhamanAndNicobarNative;
    this.IdValue = this.editStudentDetails._id;
  
    this.courseprogram = new FormControl(this.courseprogramValue, Validators.required);
    this.batch = new FormControl(this.batchValue, Validators.required);
    this.rollNo = new FormControl(this.rollNoValue, Validators.required);
    this.regNo = new FormControl(this.regNoValue);
    this.firstName = new FormControl(this.firstNameValue, Validators.required);
    this.lastName = new FormControl(this.lastNameValue, Validators.required);
    this.gender = new FormControl(this.genderValue, Validators.required);
    this.dob = new FormControl(this.dobValue, Validators.required);
    this.maritalStatus = new FormControl(this.maritalStatusValue);
    this.mobileNo = new FormControl(this.mobileNoValue, Validators.required);
    this.bloodGroup = new FormControl(this.bloodGroupValue);
    this.emailId = new FormControl(this.emailIdValue, Validators.required);
    this.ffirstName = new FormControl(this.ffirstNameValue);
    this.flastName = new FormControl(this.flastNameValue);
    this.foccupation = new FormControl(this.foccupationValue);
    this.fannualIncome = new FormControl(this.fannualIncomeValue);
    this.fmobileNo = new FormControl(this.fmobileNoValue);
    this.paadharNO = new FormControl(this.paadharNOValue);
    this.mfirstName = new FormControl(this.mfirstNameValue);
    this.mlastName = new FormControl(this.mlastNameValue);
    this.moccupation = new FormControl(this.moccupationValue);
    this.mannualIncome = new FormControl(this.mannualIncomeValue);
    this.mmobileNo = new FormControl(this.mmobileNoValue);
    this.nationality = new FormControl(this.nationalityValue);
    this.religion = new FormControl( this.religionValue);
    this.caste = new FormControl(this.casteValue);
    this.community = new FormControl(this.communityValue, Validators.required);
    this.institution = new FormControl(this.institutionValue, Validators.required);
    this.admissionCategory = new FormControl(this.admissionCategoryValue, Validators.required);
    this.admissionType = new FormControl(this.admissionTypeValue, Validators.required);
    this.financialCategory = new FormControl(this.financialCategoryValue, Validators.required);
    this.boarding = new FormControl(this.boardingValue, Validators.required);
    this.boardingStartDate = new FormControl(this.boardingStartDateValue);
    this.applicationNo = new FormControl(this.applicationNoValue);
    this.admissionDate = new FormControl(this.admissionDateValue);
    this.admissionNo = new FormControl(this.admissionNoValue);
    this.joinDate = new FormControl(this.joinDateValue);
    this.referalType = new FormControl(this.referalTypeValue);
    this.referal = new FormControl(this.referalValue);
    this.motherTongue = new FormControl(this.motherTongueValue);
    this.secondLanguage = new FormControl(this.secondLanguageValue);
    this.sPhoto = new FormControl(this.sPhotoValue);
    this.firstGraduate = new FormControl(this.firstGraduateValue);
    this.scholarshipApplicable = new FormControl(this.scholarshipApplicableValue);
    this.parentExServiceMan = new FormControl(this.parentExServiceManValue);
    this.minoritygroup = new FormControl(this.minoritygroupValue);
    this.physicallyChallengedPerson = new FormControl(this.physicallyChallengedPersonValue);
    this.andhamanAndNicobarNative = new FormControl(this.andhamanAndNicobarNativeValue);
    this.section = new FormControl(this.sectionValue, Validators.required);
    this.semester = new FormControl(this.semesterValue, Validators.required);
    this.transportRoute = new FormControl(this.transportRouteValue);
    this.hostel = new FormControl(this.hostelValue);
  });
  }
  editStudentDetailSubmit() {
    const editStudentDetail = {
      courseprogram: this.courseprogram.value,
      batch: this.batch.value,
      rollNo: this.rollNo.value,
      regNo: this.regNo.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      gender: this.gender.value,
      dob: this.dob.value,
      maritalStatus: this.maritalStatus.value,
      mobileNo: this.mobileNo.value,
      bloodGroup: this.bloodGroup.value,
      emailId: this.emailId.value,
      ffirstName: this.ffirstName.value,
      flastName: this.flastName.value,
      foccupation: this.foccupation.value,
      fannualIncome: this.fannualIncome.value,
      fmobileNo: this.fmobileNo.value,
      paadharNO: this.paadharNO.value,
      mfirstName: this.mfirstName.value,
      mlastName: this.mlastName.value,
      moccupation: this.moccupation.value,
      mannualIncome: this.mannualIncome.value,
      mmobileNo: this.mmobileNo.value,
      nationality: this.nationality.value,
      religion: this.religion.value,
      caste: this.caste.value,
      community: this.community.value,
      institution: this.institution.value,
      admissionCategory: this.admissionCategory.value,
      admissionType: this.admissionType.value,
      financialCategory: this.financialCategory.value,
      boarding: this.boarding.value,
      boardingStartDate: this.boardingStartDate.value,
      applicationNo: this.applicationNo.value,
      admissionDate: this.admissionDate.value,
      admissionNo: this.admissionNo.value,
      joinDate: this.joinDate.value,
      referalType: this.referalType.value,
      referal: this.referal.value,
      motherTongue: this.motherTongue.value,
      secondLanguage: this.secondLanguage.value,
      firstGraduate: this.fg,
      scholarshipApplicable: this.sa,
      parentExServiceMan: this.pxsm,
      minoritygroup: this.mg,
      physicallyChallengedPerson: this.pcp,
      andhamanAndNicobarNative: this.aan,
      sPhoto: this.getfileLoc,
      section: this.section.value,
      semester: this.semester.value,
      transportRoute: this.transportRoute.value,
      hostel: this.hostel.value,
    };
    this.request.updateStudentDetails(this.IdValue,editStudentDetail).subscribe((response: any) => { 
     console.log(response);
    if (response.status == 'success') {
      swal("Updated Sucessfully");
      this.router.navigate(['studentProfile']);
      this.viewStudentDetailById(this.id);
    }
    else if (response.status == 'error') {
      this.setMessage(response.error);
      console.log(response.error);
    }

    }, (error) => {
      this.setMessage(error);
    });
  }
  loadGender() {
    this.request.getGender().subscribe((response: any) => {
      this.genders = response;
      console.log('Gender', response);
    }, (error) => {
      console.log(error);
    });
  }
  loadNationality() {
    this.request.getNationality().subscribe((response: any) => {
      this.nationalities = response;
      console.log('Nationality' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadReligion() {
    this.request.getReligion().subscribe((response: any) => {
      this.religions = response;
      console.log('Religion' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadCommunity() {
    this.request.getCommunity().subscribe((response: any) => {
      this.communities = response;
      console.log('Community' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadCaste() {
    this.request.getCaste().subscribe((response: any) => {
      this.castes = response;
      console.log('Caste' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadAdmissionType() {
    this.request.getAdmissiontype().subscribe((response: any) => {
      this.admissiontypes = response;
      console.log('AdmissionType',response);
    }, (error) => {
      console.log(error);
    });
  }
  loadRefferalType() {
    this.request.getReferralType().subscribe((response: any) => {
      this.referralTypes = response;
      console.log('ReferenceType', response);
    }, (error) => {
      console.log(error);
    });
  }
  loadMotherTongue() {
    this.request.getMotherTongue().subscribe((response: any) => {
      this.motherTongues = response;
      console.log('MotherTongue' ,this.motherTongues);
    }, (error) => {
      console.log(error);
    });
  }
  loadSecondLanguage() {
    this.request.getMotherTongue().subscribe((response: any) => {
      this.secondLanguages = response;
      console.log('MotherTongue' ,this.secondLanguages);
    }, (error) => {
      console.log(error);
    });
  }
  loadMaritalstatus()  {
    this.request.getMaritalstatus().subscribe((response : any) => {
    this.maritalstatuses = response;
    console.log('MaritalStatus', this.maritalstatuses);
    }, (error) => {
      console.log(error);
    });
  }
  loadBloodgroup()  {
    this.request.getBloodgroup().subscribe((response : any) => {
    this.bloodgroups = response;
    console.log('BloodGroup',this.bloodgroups);
    }, (error) => {
      console.log(error);
    });
  }
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      console.log('Institution', response);
      this.institutions = response;
    }, (error) => {
      console.log(error);
    });
  }
  loadBatch() {
    this.request.getbatch().subscribe((response: any) => {
      this.batches = response;
      console.log('Batches' ,this.batches);
    }, (error) => {
      console.log(error);
    });
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Filter CourseCategory, AdmissionType, AdmissionCategory by Institution
  onInstitutionChange(Institution: any) {
    // console.log('institution', Institution)
    if (Institution) {
      this.request.getAdmissionTypeByIns(Institution).subscribe((response: any) => {
        console.log('admissionType', response);
        this.admissiontypes = response;
      }, (error) => {
        console.log(error);
      });
      this.request.getAdmissionCategoryByIns(Institution).subscribe((response: any) => {
        console.log('admissionCategory', response);
        this.admissioncategories = response;
      }, (error) => {
        console.log(error);
      });
      this.request.getSemesterbyIns(Institution).subscribe((response: any) => {
        // console.log('admissionCategory', response);
        this.semestersByIns = response;
      }, (error) => {
        console.log(error);
      });
    } else

    this.admissiontypes = null;
    this.admissioncategories = null;
    this.semestersByIns = null;
  }
  
  //Student Details Edit 
  viewStudentDetailById(id: any) {
    if(id) {
      this.request.fetchStudentDetailsById(id).subscribe((response) => {
        this.studentDetails = response;
        this.institutiond = response[0].institution;
        this.loadAdmissionCategoryByIns(this.institutiond);
        this.loadSemesterByIns(this.institutiond);
        this.loadHostelByIns(this.institutiond);
        this.courseprogramd = response[0].courseprogram;
        this.loadSectionByCourseProgram(this.courseprogramd);
        console.log('StudentDetailById', this.studentDetails);
      }, (error) => {
        console.log(error);
      });
    }
  }
  loadSectionByCourseProgram(courseprogram) {
    this.request.getSectionbycourseprogram(courseprogram).subscribe((response: any) => {
      this.sectionByCoursePrograms = response;
      console.log('SectionByCoursePrograms', this.sectionByCoursePrograms);
    }, (error) => {
      console.log(error);
    });
  }
  loadSemesterByIns(institution) {
    this.request.getSemesterbyIns(institution).subscribe((response: any) => {
      this.semestersByIns = response;
      console.log('SemestersByIns', this.semestersByIns);
    }, (error) => {
      console.log(error);
    });
  }
  loadHostelByIns(institution) {
    this.request.getHostelbyIns(institution).subscribe((response: any) => {
      this.hostelByIns = response;
      console.log('HostelByIns', this.hostelByIns);
    }, (error) => {
      console.log(error);
    });
  }
  loadAdmissionCategoryByIns(institution) {
    this.request.getAdmissionCategoryByIns(institution).subscribe((response: any) => {
      this.admissioncategories = response;
      console.log('AdmissionCategoryByIns', this.admissioncategories);
    }, (error) => {
      console.log(error);
    });
  }
  loadCourseProgram() {
    this.request.getCourseprogram().subscribe((response: any) => {
      this.courseprograms = response;
      console.log('CourseProgram' ,this.courseprograms);
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit() { 
    this.loadAdmissionType();
    this.loadCaste();
    this.loadMotherTongue();
    this.loadGender();
    this.loadCommunity();
    this.loadNationality();
    this.loadRefferalType();
    this.loadReligion();
    this.loadSecondLanguage();
    this.loadMaritalstatus();
    this.loadBloodgroup();
    this.loadInstitution();
    this.loadCourseProgram();
    this.loadBatch();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
      this.getfileLoc = resPath.result;
    };
    this.viewStudentDetailById(this.id);
    //jQuery Validation
    $(function () {
      $('#studentEntry').validate({

        highlight: function (input) {
          $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
          $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
          $(element).parents('.form-group').append(error);
        }
      });
    });
   
  }
}
