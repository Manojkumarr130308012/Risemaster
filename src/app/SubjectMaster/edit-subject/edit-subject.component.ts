import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl,} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  Id: any;
  IdValue: any;
  institutions;
  public message: string;
  userInfo: any;
  institutionValue: any;
  canId: any;
  institution: any;
  department: any;
  courseprogram: any;
  subjectCode: any;
  subjectDescription: any;
  subjectType: any;
  subjectClassification : any;
  subjectCategory: any;
  abbreviation: any;
  markDefinition: any;
  effectiveTo: any;
  effectiveFrom: any;
  topicCoverage : any; 
  subjects: any;
  subjectTypes: any;
  subjectclassifications: any;
  subjectCategories: any;
  topicCoverages: any;
  markDefinitions: any;
  courseprogrambyIns: any;
  departmentByIns: any;
  IdValue1: any;
  departmentValue: any;
  semestersByIns: any;
  id: any;
  editSubject: any;
  courseprogramValue: any;
  semesterValue: any;
  subjectTypeValue: any;
  subjectCodeValue: any;
  subjectDescriptionValue: any;
  subjectCategoryValue: any;
  subjectClassificationValue: any;
  abbreviationValue: any;
  topicCoverageValue: any;
  markDefinitionValue: any;
  effectiveFromValue: any;
  effectiveToValue: any;
  lessonPlanValue: any;
  semester: any;
  lessonPlan: any;
  markDefinitionsById: any;
  markDefinitionId: any;
  internalByMarkDef: any;
  externalByMarkDef: any;
  //Subject-Staff
  addStaffForm: FormGroup;
  editStaffForm: FormGroup;
  staffName: any;
  department2: any;
  staffName2: any;
  effectiveTo2: any;
  effectiveFrom2: any;
  staffNameValue: any;
  //Subject-Syllabus
  addSyllabusForm: FormGroup;
  editSyllabusForm: FormGroup;
  unitNo: any;
  title: any;
  lecturePeriod: any;
  tutorialPeriod: any;
  unitDescription: any;
  unitNo2: any;
  title2: any;
  lecturePeriod2: any;
  tutorialPeriod2: any;
  unitDescription2: any;
  subjectstaffs: Object;
  subjectSyllabuses: Object;
  staffprofiles: Object;
  editSubjectStaff: any;
  subjectValue: any;
  editSubjectSyllabus: any;
  unitNoValue: any;
  titleValue: any;
  lecturePeriodValue: any;
  tutorialPeriodValue: any;
  unitDescriptionValue: any;
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
    })
     //Get institution & department  value from localstorage
     this.userInfo = localStorage.getItem('userData');
     this.userInfo = JSON.parse(this.userInfo);
     this.IdValue = this.userInfo.institution;
     this.institutionValue = this.IdValue;
     this.IdValue1 = this.userInfo.department;
     this.departmentValue = this.IdValue1;
 
    this.institution = new FormControl(this.institutionValue);
    this.department = new FormControl( this.departmentValue);
    // Edit Form - subject details
    this.editForm = this.formBuilder.group({
      courseprogram: ["", Validators.required],
      department: ["", Validators.required],
      semester: ["", Validators.required],
      subjectCode: ["", Validators.required],
      subjectDescription: ["", Validators.required],
      subjectType: ["", Validators.required],
      subjectClassification : ["", Validators.required],
      subjectCategory: ["", Validators.required],
      abbreviation: ["", Validators.required],
      markDefinition: ["", Validators.required],
      effectiveTo: ["", Validators.required],
      effectiveFrom: ["", Validators.required],
      topicCoverage : ["", Validators.required],
      lessonPlan: ["", Validators.required],
    });
    // Add Form - subject Staff
    this.addStaffForm = this.formBuilder.group({
      department: ["", Validators.required],
      staffName: ["", Validators.required],
      effectiveTo: ["", Validators.required],
      effectiveFrom: ["", Validators.required],
    });
     // Edit Form - subject Staff
    this.editStaffForm = this.formBuilder.group({
      department2: ["", Validators.required],
      staffName2: ["", Validators.required],
      effectiveTo2: ["", Validators.required],
      effectiveFrom2: ["", Validators.required],
    });
    // Add Form - subject Staff
    this.addSyllabusForm = this.formBuilder.group({
      unitNo: ["", Validators.required],
      title: ["", Validators.required],
      lecturePeriod: ["", Validators.required],
      tutorialPeriod: ["", Validators.required],
      unitDescription: ["", Validators.required],
    });
     // Edit Form - subject Staff
    this.editSyllabusForm = this.formBuilder.group({
      unitNo2: ["", Validators.required],
      title2: ["", Validators.required],
      lecturePeriod2: ["", Validators.required],
      tutorialPeriod2: ["", Validators.required],
      unitDescription2: ["", Validators.required],
    });
  }

  public setMessage(message) {
    return (this.message = message);
  }

  // To display Subject Type
  viewData(id: any) {
    this.request.fetchSubjectById(id).subscribe(
      response => {
        this.subjects = response;
        console.log('SubjectById', this.subjects);
        this.markDefinitionId = this.subjects[0].markDefinition;
        console.log('MarkId', this.markDefinitionId);
        this.loadMarkDefinitionById(this.markDefinitionId);
        this.loadInternalBymarkDef(this.markDefinitionId);
        this.loadExternalBymarkDef(this.markDefinitionId);
      },
      error => {
        console.log(error);
      }
    );
  }
// convenience getter for easy access to form fields
 
  get f() {
    return this.editForm.controls;
  }
  get a() {
    return this.addStaffForm.controls;
  } 
  get a2() {
    return this.editStaffForm.controls;
  }
  get e() {
    return this.addSyllabusForm.controls;
  } 
  get e2() {
    return this.editSyllabusForm.controls;
  }
  onEdit() {
    this.Id = this.id;
    // console.log('ID', this.Id);
    this.request.fetchSubjectById(this.Id).subscribe((response) => {
    this.editSubject = response[0];
    this.institutionValue = this.editSubject.institution;
    this.departmentValue = this.editSubject.department;
    this.courseprogramValue = this.editSubject.courseprogram;
    this.semesterValue = this.editSubject.semester;
    this.subjectTypeValue = this.editSubject.subjectType;
    this.subjectCodeValue = this.editSubject.subjectCode;
    this.subjectDescriptionValue = this.editSubject.subjectDescription;
    this.subjectCategoryValue = this.editSubject.subjectCategory;
    this.subjectClassificationValue = this.editSubject.subjectClassification;
    this.abbreviationValue = this.editSubject.abbreviation;
    this.markDefinitionValue = this.editSubject.markDefinition;
    this.topicCoverageValue = this.editSubject.topicCoverage;
    this.effectiveFromValue = this.editSubject.effectiveFrom;
    this.effectiveToValue = this.editSubject.effectiveTo;
    this.lessonPlanValue = this.editSubject.lessonPlan;
    this.IdValue = this.editSubject._id;
  
    this.editForm = this.formBuilder.group({
      courseprogram: [this.courseprogramValue, Validators.required],
      department: [ this.departmentValue, Validators.required],
      semester: [ this.semesterValue, Validators.required],
      subjectCode: [this.subjectCodeValue, Validators.required],
      subjectDescription: [this.subjectDescriptionValue, Validators.required],
      subjectType: [ this.subjectTypeValue, Validators.required],
      subjectClassification : [ this.subjectClassificationValue, Validators.required],
      subjectCategory: [ this.subjectCategoryValue, Validators.required],
      abbreviation: [this.abbreviationValue, Validators.required],
      markDefinition: [this.markDefinitionValue, Validators.required],
      effectiveTo: [this.effectiveToValue, Validators.required],
      effectiveFrom: [this.effectiveFromValue, Validators.required],
      topicCoverage : [ this.topicCoverageValue, Validators.required],
      lessonPlan: [this.lessonPlanValue, Validators.required],
    });
    });
  }
  onEditSubject() {
    const editDetail = {
      institution: this.institutionValue,
      department: this.editForm.get('department').value,
      semester: this.editForm.get('semester').value,
      courseprogram:  this.editForm.get('courseprogram').value,
      subjectCode:  this.editForm.get('subjectCode').value,
      subjectDescription:  this.editForm.get('subjectDescription').value,
      subjectType:  this.editForm.get('subjectType').value,
      subjectClassification :  this.editForm.get('subjectClassification').value,
      subjectCategory:  this.editForm.get('subjectCategory').value,
      abbreviation:  this.editForm.get('abbreviation').value,
      markDefinition:  this.editForm.get('markDefinition').value,
      effectiveTo:  this.editForm.get('effectiveTo').value,
      effectiveFrom:  this.editForm.get('effectiveFrom').value,
      topicCoverage : this.editForm.get('topicCoverage').value,
      lessonPlan : this.editForm.get('lessonPlan').value,
     
    };
    this.request.updateSubject(this.IdValue,editDetail).subscribe((response: any) => { 
     console.log(response);
    if (response.status == 'success') {
      swal("Updated Sucessfully");
      this.loadModal();
      this.viewData(this.id);
    }
    else if (response.status == 'error') {
      this.setMessage(response.error);
      console.log(response.error);
    }

    }, (error) => {
      this.setMessage(error);
    });
  }

//Add Subject-Staff
onAddSubjectStaff() {
  this.submitted = true;
  if (this.addStaffForm.invalid) {
    return;
  }
  const newSubjectstaff ={
    institution: this.institutionValue,
    subject: this.id,
    department: this.addStaffForm.get('department').value,
    staffName: this.addStaffForm.get('staffName').value,
    effectiveTo:  this.addStaffForm.get('effectiveTo').value,
    effectiveFrom:  this.addStaffForm.get('effectiveFrom').value,
  }
  this.request.addSubjectStaff(newSubjectstaff).subscribe(
    (res: any) => {
      if (res.status == "success") {
        swal("Added Sucessfully");
        this.loadModal();
        this.viewSubjectStaff(this.id);
      } else if (res.status == "error") {
        swal(res.error);
      }
    },
    error => {
      swal(error);
    }
  );
  console.log(this.addStaffForm.value);
}

// To display Subject Staff
viewSubjectStaff(subject: any) {
  this.request.getStaffBySubject(subject).subscribe(
    response => {
      this.subjectstaffs = response;
      console.log('SubjectStaffs', this.subjectstaffs);
    },
    error => {
      console.log(error);
    }
  );
}
//staff details based on department
onDepartmentChange(department : string) { 
  if (department){
    console.log(department);
  this.request.getStaffProfileByDep(department).subscribe((response) => {
    this.staffprofiles = response;
    console.log('StaffDetails',this.staffprofiles);
  }, (error) => {
    console.log(error);
  });
  } else
  this.staffprofiles = null;
}

//Edit Subject-staff
onEditStaff(subjectStaff) {
  this.Id = subjectStaff._id;
  this.request.fetchSubjectStaffById(this.Id).subscribe(response => {
    this.editSubjectStaff = response[0];
    console.log(response);
    this.institutionValue = this.editSubjectStaff.institution;
    this.departmentValue = this.editSubjectStaff.department;
    this.subjectValue = this.editSubjectStaff.subject;
    this.effectiveFromValue = this.editSubjectStaff.effectiveFrom;
    this.effectiveToValue = this.editSubjectStaff.effectiveTo;
    this.staffNameValue = this.editSubjectStaff.staffName;
    this.IdValue = this.editSubjectStaff._id;

    this.editStaffForm = this.formBuilder.group({
      department2: [this.departmentValue, Validators.required],
      effectiveFrom2: [this.effectiveFromValue, Validators.required],
      effectiveTo2: [this.effectiveToValue, Validators.required],
      staffName2: [this.staffNameValue, Validators.required],
    });
    console.log(this.editStaffForm.value);
  });
}
onEditSubjectStaff() {
  this.submitted = true;
  console.log(this.editStaffForm.value);
  if (this.editStaffForm.invalid) {
    return;
  }

  const edata = {
    institution: this.institutionValue,
    subject: this.id,
    department: this.editStaffForm.get('department2').value,
    staffName: this.editStaffForm.get('staffName2').value,
    effectiveTo:  this.editStaffForm.get('effectiveTo2').value,
    effectiveFrom:  this.editStaffForm.get('effectiveFrom2').value,
  };

  this.request.updateSubjectStaff(this.IdValue, edata).subscribe(
    (res: any) => {
      if (res.status == "success") {
        swal("Updated Sucessfully");
        this.loadModal();
        this.viewSubjectStaff(this.id);
      } else if (res.status == "error") {
        swal(res.error);
      }
    },
    error => {
      console.log(error);
      swal(error);
    }
  );
}
//Add Subject-Staff
onAddSubjectSyllabus() {
  this.submitted = true;
  if (this.addSyllabusForm.invalid) {
    return;
  }
  const newSubjectsyllabus ={
    institution: this.institutionValue,
    subject: this.id,
    unitNo: this.addSyllabusForm.get('unitNo').value,
    title: this.addSyllabusForm.get('title').value,
    lecturePeriod:  this.addSyllabusForm.get('lecturePeriod').value,
    tutorialPeriod:  this.addSyllabusForm.get('tutorialPeriod').value,
    unitDescription:  this.addSyllabusForm.get('unitDescription').value,
  }
  this.request.addSubjectSyllabus(newSubjectsyllabus).subscribe(
    (res: any) => {
      if (res.status == "success") {
        swal("Added Sucessfully");
        this.loadModal();
        this.viewSubjectSyllabus(this.id);
      } else if (res.status == "error") {
        swal(res.error);
      }
    },
    error => {
      swal(error);
    }
  );
  console.log(this.addSyllabusForm.value);
}

// To display Subject Staff
viewSubjectSyllabus(subject: any) {
  this.request.getSyllabusBySubject(subject).subscribe(
    response => {
      this.subjectSyllabuses = response;
      console.log('Subject-Syllabus', this.subjectSyllabuses);
    },
    error => {
      console.log(error);
    }
  );
}
//Edit Subject-staff
onEditSyllabus(subjectSyllabus) {
  this.Id = subjectSyllabus._id;
  this.request.fetchSubjectSyllabusById(this.Id).subscribe(response => {
    this.editSubjectSyllabus = response[0];
    console.log(response);
    this.institutionValue = this.editSubjectSyllabus.institution;
    this.departmentValue = this.editSubjectSyllabus.department;
    this.subjectValue = this.editSubjectSyllabus.subject;
    this.unitNoValue = this.editSubjectSyllabus.unitNo;
    this.titleValue = this.editSubjectSyllabus.title;
    this.lecturePeriodValue = this.editSubjectSyllabus.lecturePeriod;
    this.tutorialPeriodValue = this.editSubjectSyllabus.tutorialPeriod;
    this.unitDescriptionValue = this.editSubjectSyllabus.unitDescription;
    this.IdValue = this.editSubjectSyllabus._id;

    this.editSyllabusForm = this.formBuilder.group({
      unitNo2: [this.unitNoValue, Validators.required],
      title2: [this.titleValue, Validators.required],
      lecturePeriod2: [this.lecturePeriodValue, Validators.required],
      tutorialPeriod2: [this.tutorialPeriodValue, Validators.required],
      unitDescription2: [this.unitDescriptionValue, Validators.required],
    });
    console.log(this.editSyllabusForm.value);
  });
}
onEditSubjectSyllabus() {
  this.submitted = true;
  console.log(this.editSyllabusForm.value);
  if (this.editSyllabusForm.invalid) {
    return;
  }

  const edata = {
    institution: this.institutionValue,
    subject: this.id,
    unitNo: this.editSyllabusForm.get('unitNo2').value,
    title: this.editSyllabusForm.get('title2').value,
    lecturePeriod:  this.editSyllabusForm.get('lecturePeriod2').value,
    tutorialPeriod:  this.editSyllabusForm.get('tutorialPeriod2').value,
    unitDescription:  this.editSyllabusForm.get('unitDescription2').value,
  };

  this.request.updateSubjectSyllabus(this.IdValue, edata).subscribe(
    (res: any) => {
      if (res.status == "success") {
        swal("Updated Sucessfully");
        this.loadModal();
        this.viewSubjectSyllabus(this.id);
      } else if (res.status == "error") {
        swal(res.error);
      }
    },
    error => {
      console.log(error);
      swal(error);
    }
  );
}
  // Bind institution data
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
        this.institutions = response;
        console.log('Institution', this.institutions);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  loadSubjectType() {
    this.request.getSubjectType().subscribe((response: any) => {
        this.subjectTypes = response;
        console.log('subjectTypes',  this.subjectTypes);
      },
      error => {
        console.log(error);
      }
    );
  }
  loadSubjectClassification() {
    this.request.getSubjectClassification().subscribe((response: any) => {
        this.subjectclassifications = response;
        console.log('SubjectClassification',  this.subjectclassifications);
      },
      error => {
        console.log(error);
      }
    );
  }
  loadSubjectCategory() {
    this.request.getSubjectCategory().subscribe((response: any) => {
        this.subjectCategories = response;
        console.log('subjectCategories',  this.subjectCategories);
      },
      error => {
        console.log(error);
      }
    );
  }
  loadMarkDefinition() {
    this.request.getMarkDefinition().subscribe((response: any) => {
        this.markDefinitions = response;
        console.log('markDefinitions',  this.markDefinitions);
      },
      error => {
        console.log(error);
      }
    );
  }
  loadMarkDefinitionById(id: any) {
    this.request.fetchMarkDefinitionById(id).subscribe((response: any) => {
        this.markDefinitionsById = response;
        console.log('markDefinitionsById',  this.markDefinitionsById);
      },
      error => {
        console.log(error);
      }
    );
  }
  //
  loadInternalBymarkDef(markDefinition: any) {
    this.request.fetchIntMarkbymarkDef(markDefinition).subscribe((response: any) => {
        this.internalByMarkDef = response;
        console.log('InternalMarkByMarkDef',  this.internalByMarkDef);
      },
      error => {
        console.log(error);
      }
    );
  }
  loadExternalBymarkDef(markDefinition: any) {
    this.request.fetchExtMarkbymarkDef(markDefinition).subscribe((response: any) => {
        this.externalByMarkDef = response;
        console.log('ExternalMarkByMarkDef',  this.externalByMarkDef);
      },
      error => {
        console.log(error);
      }
    );
  }
  //
  loadtopicCoverage() {
    this.request.getTopicCoverage().subscribe((response: any) => {
        this.topicCoverages = response;
        console.log('TopicCoverage',  this.topicCoverages);
      },
      error => {
        console.log(error);
      }
    );
  }
  loadDepartmentByIns(Institution: any) {
    if (Institution) {
      this.request.getDetartmentbyIns(Institution).subscribe((response: any) => {
        this.departmentByIns = response;
        console.log('departmentByIns',  this.departmentByIns);
      }, (error) => {
        console.log(error);
      });
    } else
    this.departmentByIns = null;
  }
  loadSemesterByIns(Institution: any) {
    if (Institution) {
      this.request.getSemesterbyIns(Institution).subscribe((response: any) => {
        this.semestersByIns = response;
        console.log('semesterByIns',  this.semestersByIns);
      }, (error) => {
        console.log(error);
      });
    } else
    this.semestersByIns = null;
  }
  loadCourseProgramByIns(Institution: any) {
    if (Institution) {
      this.request.getCourseprogramByIns(Institution).subscribe((response: any) => {
        this.courseprogrambyIns = response;
        console.log('CourseProgramByIns',  this.courseprogrambyIns);
      }, (error) => {
        console.log(error);
      });
    } else
    this.courseprogrambyIns = null;
  }
    onInstitutionChange(Institution: any) {
      // console.log('institution', Institution)
      if (Institution) {
        this.request.getCourseprogramByIns(Institution).subscribe((response: any) => {
          this.courseprogrambyIns = response;
          console.log('CourseProgramByIns',  this.courseprogrambyIns);
        }, (error) => {
          console.log(error);
        });
      } else
      this.courseprogrambyIns = null;
    }
    onDetpartmentChange(department: any) {
      // console.log('institution', Institution)
      if (department) {
        this.request.fetchByDepartment(department).subscribe((response: any) => {
          this.subjects = response;
          console.log('subjectsByDept',  this.subjects);
        }, (error) => {
          console.log(error);
        });
      } else
      this.courseprogrambyIns = null;
    }
  async startScript() {
    await this.dynamicScriptLoader
      .load(
        "dataTables.buttons",
        "buttons.flash",
        "jszip",
        "vfs_fonts",
        "form.min"
      )
      .then(data => {
        // this.loadData();
      })
      .catch(error => console.log(error));
  }
  // private loadData() {
  //   $("#tableExport").DataTable({
  //     dom: "Bfrtip",
  //     buttons: ["copy", "csv", "excel", "pdf", "print"]
  //   });
  // }

  loadModal() {
    $("#editSubjectModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#editSubjectModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
    //Subject Staff
    $("#addStaffModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#addStaffModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
    $("#editStaffModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#editStaffModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
    //Subject SYllabus
    $("#addSyllabusModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#addSyllabusModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
    $("#editSyllabusModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#editSyllabusModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
  }

  ngOnInit() {
    //this.auth.isValidUser();
    this.startScript();
    this.viewData(this.id);
    this.loadModal();
    this.loadInstitution();
    this.loadSubjectType();
    this.loadMarkDefinition();
    this.loadSubjectCategory();
    this.loadSubjectClassification();
    this.loadtopicCoverage();
    this.loadDepartmentByIns(this.institutionValue);
    this.loadSemesterByIns(this.institutionValue);
    this.loadCourseProgramByIns(this.institutionValue);
    this.viewSubjectSyllabus(this.id);
    this.viewSubjectStaff(this.id);
  }
}
