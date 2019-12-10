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
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  addForm: FormGroup; 
  editForm: FormGroup;
  submitted = false;
  public section: any;
  public courseprogram: any;
  public department: any;
  public institution: any;
  public section2: any;
  public courseprogram2: any;
  public department2: any;
  public institution2: any;
 coursecategories: any;
  Id: any;
  IdValue: any;
  editsemester: any;
  semesterValue: any;
  institutionValue: any;
  institutions;
  public message: string;
  semesters: any;
  editsection: any;
  departmentValue: any;
  courseprogramValue: any;
  sectionValue: any;
  userInfo: any;
  departmentByIns: any;
  courseprogrambyIns: any;
  sections: any;
  semestersByIns: any;
  semester: any
  batch: any;
  academicYear: any;
  batcheBycourseprograms: any;
  academicyearByBatch: any;
  courseprogram1: any;
  batch1: any;
  batchValue: any;
  academicYearValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService
  ) {
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
      batch:['', Validators.required],
      academicYear: ["", Validators.required],
      semester: ["", Validators.required],
      section: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      department2: ["", Validators.required],
      courseprogram2: ["", Validators.required],
      batch2:['', Validators.required],
      academicYear2: ["", Validators.required],
      semester2: ["", Validators.required],
      section2: ["", Validators.required]
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
  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    const newdata = {
      section: this.addForm.get("section").value,
      department: this.addForm.get("department").value,
      courseprogram: this.addForm.get("courseprogram").value,
      batch: this.addForm.get('batch').value,
      academicYear: this.addForm.get('academicYear').value,
      semester: this.addForm.get('semester').value,
      institution: this.institutionValue
    };
    this.request.addSection(newdata).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Added Sucessfully");
          this.loadModal();
          this.viewData();
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
  viewData() {
    this.request.getSection().subscribe(
      response => {
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
    this.request.deleteSection(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log("Deleted");
      swal("Deleted");
    });
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
      this.request.fetchAcademicyearByBatch(batch).subscribe((response: any) => {
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
  // To edit course category
  onEdit(semester) {
    this.Id = semester._id;
    this.request.fetchSectionById(this.Id).subscribe(response => {
      this.editsection = response[0];
      this.courseprogram1 = this.editsection.courseprogram;
    this.loadBatchByCourseprogram(this.courseprogram1);
    this.batch1 = this.editsection.batch;
    this.loadacademicYearByBatch(this.batch1);
      console.log(response);
      this.institutionValue = this.editsection.institution;
      this.departmentValue = this.editsection.department;
      this.batchValue = this.editsection.batch;
      this.academicYearValue = this.editsection.academicYear;
      this.courseprogramValue = this.editsection.courseprogram;
      this.semesterValue = this.editsection.semester;
      this.sectionValue = this.editsection.section;
      this.IdValue = this.editsection._id;

      this.editForm = this.formBuilder.group({
        department2: [this.departmentValue, Validators.required],
        courseprogram2: [ this.courseprogramValue, Validators.required],
        batch2: [ this.batchValue, Validators.required],
        academicYear2: [ this.academicYearValue, Validators.required],
        semester2: [ this.semesterValue, Validators.required],
        section2: [this.sectionValue, Validators.required]
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
      section: this.editForm.get("section2").value,
      department: this.editForm.get("department2").value,
      courseprogram: this.editForm.get("courseprogram2").value,
      batch: this.editForm.get('batch2').value,
      academicYear: this.editForm.get('academicYear2').value,
      semester: this.editForm.get('semester2').value,
      institution: this.institutionValue
    };

    this.request.updateSection(this.IdValue, edata).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Updated Sucessfully");
          this.loadModal();
          this.viewData();
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
  // convenience getter for easy access to form fields
  get f() {
    return this.addForm.controls;
  }
  get f2() {
    return this.editForm.controls;
  }
  open(section) {
    this.Id=section._id;
    this.router.navigate(['section-staff'], {
       queryParams: {
          // edit: true,
           id: section._id,
         }
        });
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
    this.viewData();
    this.loadInstitution();
    this.loadModal();
    this.loadDepartmentByIns(this.institutionValue);
    this.loadCourseProgramByIns(this.institutionValue);
    this.loadSemesterByIns(this.institutionValue);
  }
}

