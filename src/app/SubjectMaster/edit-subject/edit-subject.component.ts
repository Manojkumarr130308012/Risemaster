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
    // Add Form
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
  }


  public setMessage(message) {
    return (this.message = message);
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
 // convenience getter for easy access to form fields
 get f() {
  return this.registerForm.controls;
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
 
  // To display Subject Type
  viewData(id: any) {
    this.request.fetchSubjectById(id).subscribe(
      response => {
        this.subjects = response;
        console.log('SubjectById', this.subjects);
      },
      error => {
        console.log(error);
      }
    );
  }

  get f2() {
    return this.editForm.controls;
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
      courseprogram: this.courseprogram.value,
      department: this.department.value,
      semester:  this.semester.value,
      subjectCode: this.subjectCode.value,
      subjectDescription: this.subjectDescription.value,
      subjectType:  this.subjectType.value,
      subjectClassification :  this.subjectClassification.value,
      subjectCategory: this.subjectCategory.value,
      abbreviation: this.abbreviation.value,
      markDefinition: this.markDefinition.value,
      effectiveTo: this.effectiveTo.value,
      effectiveFrom: this.effectiveFrom.value,
      topicCoverage :  this.topicCoverage.value,
      lessonPlan: this.lessonPlan.value,
     

    };
    this.request.updateSubject(this.IdValue,editDetail).subscribe((response: any) => { 
     console.log(response);
    if (response.status == 'success') {
      swal("Updated Sucessfully");
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
    $("#addModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#addModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
    $("#editModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#editModal").on("hidden.bs.modal", function() {
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
  }
}
