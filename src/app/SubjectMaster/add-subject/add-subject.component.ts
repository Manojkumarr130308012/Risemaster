import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl,} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {


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
  batch: any;
  academicYear: any;
  batcheBycourseprograms: any;
  academicyearByBatch: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private auth: AuthService
  ) {
     //Get institution & department  value from localstorage
     this.userInfo = localStorage.getItem('userData');
     this.userInfo = JSON.parse(this.userInfo);
     this.IdValue = this.userInfo.institution;
     this.institutionValue = this.IdValue;
     this.IdValue1 = this.userInfo.department;
     this.departmentValue = this.IdValue1;

    this.institution = new FormControl({value:this.institutionValue, disabled: true});
    this.department = new FormControl( this.departmentValue);
    // Add Form
    this.registerForm = this.formBuilder.group({
      courseprogram: ["", Validators.required],
      department: ["", Validators.required],
      batch:['', Validators.required],
      academicYear: ["", Validators.required],
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
  onCourseProgramChange(courseprogram: any) {
    console.log('courseprogram' ,courseprogram)
    if (courseprogram) {
      this.request.getBatchByCoursePrgram(courseprogram).subscribe((response: any) => {
        this.batcheBycourseprograms = response;
        console.log('BatchBycourseprogram',  this.batcheBycourseprograms);
      }, (error) => {
        console.log(error);
      });
    } else
      this.batcheBycourseprograms = null;
  }
  loadBatchByCourseprogram(courseprogram) {
    this.request.getBatchByCoursePrgram(courseprogram).subscribe((response: any) => {
      this.batcheBycourseprograms = response;
      console.log('BatchBycourseprogram', this.batcheBycourseprograms);
    }, (error) => {
      console.log(error);
    });
  }
  onBatchChange(batch: any) {
    console.log('Batch' ,batch);
    if (batch) {
      this.request.fetchAcademicYear().subscribe((response: any) => {
        this.academicyearByBatch = response;
        console.log('AcademicYearByBatch',  this.academicyearByBatch);
      }, (error) => {
        console.log(error);
      });
    } else
      this.academicyearByBatch = null;
  }
  loadacademicYearByBatch(batch) {
    this.request.fetchAcademicyearByBatch(batch).subscribe((response: any) => {
      this.academicyearByBatch = response;
      console.log('AcademicYearByBatch', this.academicyearByBatch);
    }, (error) => {
      console.log(error);
    });
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
  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    //Get institution value from localstorage
    this.userInfo = localStorage.getItem('userData');
    this.userInfo = JSON.parse(this.userInfo);
    this.IdValue = this.userInfo.institution;
    this.institutionValue = this.IdValue;

    let newDetail = {
      institution: this.institutionValue,
      department: this.registerForm.get('department').value,
      batch: this.registerForm.get('batch').value,
      academicYear: this.registerForm.get('academicYear').value,
      semester: this.registerForm.get('semester').value,
      courseprogram:  this.registerForm.get('courseprogram').value,
      subjectCode:  this.registerForm.get('subjectCode').value,
      subjectDescription:  this.registerForm.get('subjectDescription').value,
      subjectType:  this.registerForm.get('subjectType').value,
      subjectClassification :  this.registerForm.get('subjectClassification').value,
      subjectCategory:  this.registerForm.get('subjectCategory').value,
      abbreviation:  this.registerForm.get('abbreviation').value,
      markDefinition:  this.registerForm.get('markDefinition').value,
      effectiveTo:  this.registerForm.get('effectiveTo').value,
      effectiveFrom:  this.registerForm.get('effectiveFrom').value,
      topicCoverage : this.registerForm.get('topicCoverage').value,
      lessonPlan : this.registerForm.get('lessonPlan').value,
    }

    this.request.addSubject(newDetail).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Added Sucessfully");
          this.loadModal();
          this.viewData(this.institutionValue);
        } else if (res.status == "error") {
          swal(res.error);
        }
      },
      error => {
        swal(error);
      }
    );
    console.log(this.registerForm.value);
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
  viewData(institutionValue) {
    this.request.getSubject(institutionValue).subscribe(
      response => {
        this.subjects = response;
        console.log(this.subjects);
      },
      error => {
        console.log(error);
      }
    );
  }

  get f2() {
    return this.editForm.controls;
  }

  onEdit(subject) {
    this.Id=subject._id;
    console.log(this.Id);
    this.router.navigate(['editSubject'], {
       queryParams: {
           edit: true,
           id: subject._id,
         }
        });
  }

  onDelete(subjectid){
    this.request.deleteSubject(subjectid).subscribe(res => {
      console.log('subjectid',subjectid);
      this.viewData(this.institutionValue);
      swal("Deleted");
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
    ////this.auth.isValidUser();
    this.startScript();
    this.viewData(this.institutionValue);
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
