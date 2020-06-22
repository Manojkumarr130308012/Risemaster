import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: "app-admission-type",
  templateUrl: "./admission-type.component.html",
  styleUrls: ["./admission-type.component.scss"]
})
export class AdmissionTypeComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public admissiontype: any;
  public institution: any;
  public admissiontype2: any;
  public institution2: any;
  public admissiontypes: any;
  Id: any;
  IdValue: any;
  editAdmissiontype: any;
  admissiontypeValue: any;
  institutionValue: any;
  public message: string;
  institutions;



  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,private auth: AuthService
  ) {

  }

  // Bind institution data
  loadAdmissiontype() {
    this.request.getInstitution().subscribe(
      (response: any) => {
        // console.log(response);
        this.institutions = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Add form validation and function

  onAddSubmit() {
    this.request.addAdmissiontype(this.registerForm.value).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Added Sucessfully");
          this.loadModal();
        //  this.loadData();
        } else if (res.status == "error") {
          console.log(res.error);
        }
      },
      error => {
        console.log(error);
      }
    );
    //}
  }



  // To edit admission type
  /*onEdit(id) {
    console.log('admissiontype_id',id);

    this.request.fetchAdmissiontypeBy(id).subscribe((response) => {
      this.editAdmissiontype = response[0];
      console.log(response);
      this.institutionValue = this.editAdmissiontype.institution;
      this.admissiontypeValue = this.editAdmissiontype.admissiontype;
      this.IdValue = this.editAdmissiontype._id;

      this.editForm = this.formBuilder.group({
        institution2: [this.institutionValue, Validators.required],
        admissiontype2: [this.admissiontypeValue, Validators.required]
      });
      console.log(this.editForm.value);
    });
  }*/

  onEditSubmit() {
    if ($("#institutions2").val() != "" && $("#admissiontypes2").val() != "") {
      const updatedData = {
        institution:  $("#institutions2").val(),
        admissiontype:  $("#admissiontypes2").val()
      };


      const id = $("#ID").val();

      this.request.updateAdmissiontype(id, updatedData).subscribe(
        (res: any) => {
          if (res.status == "success") {
            // this.loadData();
            swal("Updated Sucessfully");
            this.loadModal();
          } else if (res.status == "error") {
            console.log(res.error);
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  async startScript() {
    await this.dynamicScriptLoader
      .load(
        "dataTables.buttons",
        "buttons.flash",
        "jszip",
        "vfs_fonts",
        "pdfmake",
        "buttons.html5",
        "buttons.print"
      )
      .then(data => {
        this.loadData();
      })
      .catch(error => console.log(error));
  }

   // To delete admission type
  /*deleteAdmissiontype(id: any) {
    alert("hi");
    console.log(id);
    this.request.deleteAdmissiontype(id).subscribe(res => {
      console.log('deleteAdmissiontype',id);
      this.loadData();
      console.log('Deleted');
      this.router.navigate(['admission-type']);
    });
  }*/

  private loadData() {
    this.request.getAdmissiontype().subscribe(
      response => {
        this.admissiontypes = response;

        console.log("response", response);
        var i = 1;
        var table = $("#tableExport").DataTable({
          data: response,


          columns: [
            {
              render: function(data, type, full, meta) {
                return i++;
              }
            },
            { data: "InstitutionDetails[0].institution_name" },
            { data: "admissiontype" },
            { data: "_id" },
            {
              data: null,
              defaultContent:
                "<div class='btn btn-tbl-edit'> <i class='material-icons'>create</i></div> <div class='btn btn-tbl-delete'><i class='material-icons'>delete</i></div>",

              targets: -1
            }
          ],

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print"]
        });

        // Edit button click
        $("#tableExport tbody").on("click", ".btn-tbl-edit", function() {
          let data = table.row($(this).parents("tr")).data();

          const institution = data.institution;
          const admissiontype = data.admissiontype;
          const id = data._id;
          //console.log('Edit _id',id);

          showMyModalSetInput(id, institution, admissiontype);
        });

        function showMyModalSetInput(id, institution, admissiontype) {


        $("#institutions2").val(institution);
          $("#admissiontypes2").val(admissiontype);
          $("#ID").val(id);
          $("#editModal").modal("show");
        }


        // Delete button click
        $("#tableExport tbody").on("click", ".btn-tbl-delete", function() {
          let data = table.row($(this).parents("tr")).data();
          //let data = table.row($(this).parents('tr')).remove().draw(false);

          const id = data._id;
          console.log("Delete", id);

         // this.deleteAdmission(id);

         deleteAdmission(id);

          //console.log('Admissiontype1',deleteAdmission(id));

        });


        function deleteAdmission(id: any) {
          alert("hi");
          console.log(id);
          this.request.deleteAdmissiontype(id).subscribe(res => {
            console.log(res);
            console.log('Deleted');

          });
        }

      /*  function deleteAdmissiontype(t) {      //defining a function
          if (t === undefined) {       //if t=undefined, call tt
                console.log('Admissiontype2',t)      //call t
          }
          this.request.deleteAdmissiontype(t).subscribe(res => {
           console.log('deleteAdmissiontype22',t);
          return t;
          });
        }*/

      }
      ,
      error => {
        console.log(error);
      }
    );
  }



  private loadModal() {
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
      // $('.invalid-feedback').removeClass('error');
    });
  }

  ngOnInit() {
    //this.auth.isValidUser();
     // Add Form
     this.registerForm = this.formBuilder.group({
      institution: ['', Validators.required],
      admissiontype: ['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      institution2: ['', Validators.required],
      admissiontype2: ['', Validators.required]
    });

    //  this.viewData();
    this.startScript();
    this.loadAdmissiontype();
    this.loadModal();

    $(function() {
      $("#registerForm").validate({
        highlight: function(input) {
          $(input)
            .parents(".form-line")
            .addClass("error");
        },
        unhighlight: function(input) {
          $(input)
            .parents(".form-line")
            .removeClass("error");
        },
        errorPlacement: function(error, element) {
          $(element)
            .parents(".form-group")
            .append(error);
        }
      });
    });
    $(function() {
      $("#editForm").validate({
        highlight: function(input) {
          $(input)
            .parents(".form-line")
            .addClass("error");
        },
        unhighlight: function(input) {
          $(input)
            .parents(".form-line")
            .removeClass("error");
        },
        errorPlacement: function(error, element) {
          $(element)
            .parents(".form-group")
            .append(error);
        }
      });
    });
  }
}
