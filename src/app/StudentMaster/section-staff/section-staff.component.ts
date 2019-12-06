import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-section-staff',
  templateUrl: './section-staff.component.html',
  styleUrls: ['./section-staff.component.scss']
})
export class SectionStaffComponent implements OnInit {

  addForm: FormGroup;
  editForm: FormGroup;
  institution: any;
  subject: FormControl;
  staff: FormControl;
  institution2: FormControl;
  subject2: FormControl;
  staff2: FormControl;
  coursecategories: any;
  Id: any;
  IdValue: any;
  editsemester: any;
  semesterValue: any;
  institutionValue: any;
  institutions;
  message: string;
  semesters: any;
  editsection: any;
  departmentValue: any;
  courseprogramValue: any;
  sectionValue: any;
  userInfo: any;
  departmentByIns: any;
  courseprogrambyIns: any;
  sections: Object;
  id: any;
  batchValue: any;
  staffValue: any;
  subjectValue: any;
  semestersByIns: any;
  batcheBycourseprograms: any;
  staffprofiles: any;
  subjectBySemesters: any;
  sectionStaffs: any;
  staffBysubjects: any;
  semester: any;
  semester2: any;
  semesterValue1: any;
  subjectValue1: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
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
    /////////
   let ID = this.id;
   this.request.fetchSectionById(ID).subscribe(response => {
    this.sections = response;
    this.semesterValue =  this.sections[0].semester;

    //Add Form
   this.semester= new FormControl({value: this.semesterValue , disabled: true});
   this.staff= new FormControl('', Validators.required);
   this.subject= new FormControl('', Validators.required);

   //Edit Form 
   this.semester2= new FormControl({value: this.semesterValue , disabled: true});
   this.staff2= new FormControl('', Validators.required);
   this.subject2= new FormControl('', Validators.required);
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

  //Add form validation and function
  onAddSubmit() {
    const newdata = {
      section:  this.id,
      semester:  this.semesterValue,
      staff: this.staff.value,
      subject: this.subject.value
      
    };
    this.request.addSectionStaff(newdata).subscribe((res: any) => {
        if (res.status == "success") {
          swal("Added Sucessfully");
          this.loadModal();
          this.viewData(this.id);
        } else if (res.status == "error") {
          swal(res.error);
        }
      },
      error => {
        swal(error);
      }
    );
  }

  // To display course category
  viewData(section: any) {
    this.request.getSectionStaffbySec(section).subscribe(response => {
        this.sectionStaffs = response;
        console.log('Section_Staff-By-Section', this.sectionStaffs);
      },
      error => {
        console.log(error);
      }
    );
  }
  // To display course category
  viewSectionDetails(section: any) {
    this.request.fetchSectionById(section).subscribe(response => {
        this.sections = response;
        console.log('Section', this.sections);
      },
      error => {
        console.log(error);
      }
    );
  }

  // To delete course category
  onDelete(id: any) {
    this.request.deleteSectionStaff(id).subscribe(res => {
      console.log(id);
      this.viewData(this.id);
      console.log("Deleted");
      swal("Deleted");
    });
  }

  // To edit course category
  onEdit(semester) {
    this.Id = semester._id;
    this.request.fetchSectionStaffById(this.Id).subscribe(response => {
      this.editsection = response[0];
      console.log(response);
      this.sectionValue = this.editsection.section;
      this.semesterValue = this.editsection.semester;
      this.staffValue = this.editsection.staff;
      this.subjectValue = this.editsection.subject;
      this.IdValue = this.editsection._id;

      this.staff2 = new FormControl(this.staffValue, Validators.required);
      this.subject2 = new FormControl(this.subjectValue, Validators.required);
    });
  }
  onEditSubmit() {
    if (this.staff2.value !="" && this.subject2.value != '') {
    const edata = {
      section:  this.id,
      semester:  this.semesterValue,
      staff: this.staff2.value,
      subject: this.subject2.value,
    };

    this.request.updateSectionStaff(this.IdValue, edata).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Updated Sucessfully");
          this.loadModal();
          this.viewData(this.id);
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
  onSubjectChange(subject: any) {
    console.log('subject' ,subject)
    if (subject) {
      this.request.getStaffBySubject(subject).subscribe((response: any) => {
        this.staffBysubjects = response;
        console.log('BySubject1',  this.staffBysubjects);
      }, (error) => {
        console.log(error);
      });
    } else
      this.staffBysubjects = null;
  }
  loadStaffBySubject(subject: any) {
    if (subject) {
      this.request.getStaffBySubject(subject).subscribe((response) => {
        this.staffBysubjects = response;
        console.log('BySubject2',  this.staffBysubjects);
      }, (error) => {
        console.log(error);
      });
    } else
    this.staffBysubjects = null;
  }

  loadSubjectBySem(semester: any) {
    if (semester) {
      this.request.getSubjectbySem(semester).subscribe((response: any) => {
        this.subjectBySemesters = response;
        console.log('SubjectBySemester2',  this.subjectBySemesters);
      }, (error) => {
        console.log(error);
      });
    } else
    this.subjectBySemesters = null;
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.addForm.controls;
  }
  get f2() {
    return this.editForm.controls;
  }

  
  

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
    // this.auth.isValidUser();
    this.viewData(this.id);
    // this.viewSectionDetails(this.id);
    this.loadInstitution();
    this.loadModal();
    this.loadSemesterByIns(this.institutionValue);
    $(function() {
      $('#addForm').validate({

        highlight (input) {
          $(input).parents('.form-line').addClass('error');
        },
        unhighlight (input) {
          $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement (error, element) {
          $(element).parents('.form-group').append(error);
        }
      });
    });
    $(function() {
      $('#editForm').validate({

        highlight (input) {
          $(input).parents('.form-line').addClass('error');
        },
        unhighlight (input) {
          $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement (error, element) {
          $(element).parents('.form-group').append(error);
        }
      });
    });
  }
}

