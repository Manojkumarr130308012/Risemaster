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
  submitted = false;
  section: any;
  courseprogram: any;
  department: any;
  institution: any;
  subject: any;
  staff: any;
  batch: any;
  section2: any;
  courseprogram2: any;
  department2: any;
  institution2: any;
  subject2: any;
  staff2: any;
  batch2: any;
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
    
   this.institution = new FormControl(this.institutionValue);
    // Add Form
    this.addForm = this.formBuilder.group({
      department: ["", Validators.required],
      courseprogram: ["", Validators.required],
      batch: ["", Validators.required],
      semester: ["", Validators.required],
      staff: ["", Validators.required],
      subject: ["", Validators.required],
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      department2: ["", Validators.required],
      courseprogram2: ["", Validators.required],
      batch2: ["", Validators.required],
      semester2: ["", Validators.required],
      staff2: ["", Validators.required],
      subject2: ["", Validators.required],
    });
  }

  public setMessage(message) {
    return (this.message = message);
  }

  // Bind institution data
  loadInstitution() {
    this.request.getInstitution().subscribe(
      (response: any) => {
        console.log(response);
        this.institutions = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    const newdata = {
      section:  this.id,
      institution: this.institutionValue,
      department: this.addForm.get("department").value,
      courseprogram: this.addForm.get("courseprogram").value,
      semester: this.addForm.get("semester").value,
      staff: this.addForm.get("staff").value,
      subject: this.addForm.get("subject").value,
      batch: this.addForm.get("batch").value,
      
    };
    this.request.addSectionStaff(newdata).subscribe(
      (res: any) => {
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
    console.log(this.addForm.value);
  }

  // To display course category
  viewData(section: any) {
    this.request.getSectionStaffbySec(section).subscribe(response => {
        this.sectionStaffs = response;
        this.departmentValue =  this.sectionStaffs[0].department;
        console.log('Department', this.departmentValue);
        this.loadStaffProfileByDept(this.departmentValue);
        this.semesterValue = this.sectionStaffs[0].semester;
        console.log('Semester', this.semesterValue);
        this.loadSubjectBySem( this.semesterValue);
        this.courseprogramValue = this.sectionStaffs[0].courseprogram;
        console.log('CourseProgram', this.courseprogramValue);
        this.loadBatchByCourseprogram(this.courseprogramValue);
        console.log('Section_Staff-B-Section', this.sectionStaffs);
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
      this.institutionValue = this.editsection.institution;
      this.departmentValue = this.editsection.department;
      this.courseprogramValue = this.editsection.courseprogram;
      this.sectionValue = this.editsection.section;
      this.batchValue = this.editsection.batch;
      this.semesterValue = this.editsection.semester;
      this.staffValue = this.editsection.staff;
      this.subjectValue = this.editsection.subject;
      this.IdValue = this.editsection._id;

      this.editForm = this.formBuilder.group({
        department2: [ this.departmentValue, Validators.required],
        courseprogram2: [this.courseprogramValue, Validators.required],
        batch2: [this.batchValue, Validators.required],
        semester2: [this.semesterValue, Validators.required],
        staff2: [this.staffValue, Validators.required],
        subject2: [this.subjectValue, Validators.required],
      });
      console.log(this.editForm.value);
    });
  }
  onEditSubmit() {
    this.submitted = true;
    console.log(this.editForm.value);
    if (this.editForm.invalid) {
      return;
    }

    const edata = {
      section:  this.id,
      institution: this.institutionValue,
      department: this.editForm.get("department2").value,
      courseprogram: this.editForm.get("courseprogram2").value,
      semester: this.editForm.get("semester2").value,
      staff: this.editForm.get("staff2").value,
      subject: this.editForm.get("subject2").value,
      batch: this.editForm.get("batch2").value,
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
   loadBatchByCourseprogram(courseprogram: any) {
    if (courseprogram) {
      this.request.getBatchByCoursePrgram(courseprogram).subscribe((response) => {
        this.batcheBycourseprograms = response;
        console.log('batcheBycourseprograms',  this.batcheBycourseprograms);
      }, (error) => {
        console.log(error);
      });
    } else
    this.batcheBycourseprograms = null;
  }
  onDepartmentChange(department : any) { 
    if (department){
    this.request.getStaffProfileByDep(department).subscribe((response) => {
      this.staffprofiles = response;
      console.log('StaffDetails',this.staffprofiles);
    }, (error) => {
      console.log(error);
    });
    } else
    this.staffprofiles = null;
  }
  loadStaffProfileByDept(department: any) {
    if (department) {
      this.request.getStaffProfileByDep(department).subscribe((response) => {
        this.staffprofiles = response;
        console.log('StaffDetails',  this.staffprofiles);
      }, (error) => {
        console.log(error);
      });
    } else
    this.staffprofiles = null;
  }
  onSemesterChange(semester : any) { 
    if (semester){
      console.log(semester);
    this.request.getSubjectbySem(semester).subscribe((response) => {
      this.subjectBySemesters = response;
      console.log('SubjectBySemester',this.subjectBySemesters);
    }, (error) => {
      console.log(error);
    });
    } else
    this.staffprofiles = null;
  }
  loadSubjectBySem(semester: any) {
    if (semester) {
      this.request.getSubjectbySem(semester).subscribe((response: any) => {
        this.subjectBySemesters = response;
        console.log('SubjectBySemester',  this.subjectBySemesters);
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

  async startScript() {
    await this.dynamicScriptLoader
      .load(
        "dataTables.buttons",
        "buttons.flash",
        "jszip",
        "pdfmake",
        "vfs_fonts",
        "pdfmake",
        "buttons.html5",
        "buttons.print",
        "form.min"
      )
      .then(data => {
        this.loadData();
      })
      .catch(error => console.log(error));
  }
  private loadData() {
    $("#tableExport").DataTable({
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print"]
    });
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
    this.startScript();
    this.viewData(this.id);
    this.loadInstitution();
    this.loadModal();
    this.loadDepartmentByIns(this.institutionValue);
    this.loadCourseProgramByIns(this.institutionValue);
    this.loadSemesterByIns(this.institutionValue);
  }
}

