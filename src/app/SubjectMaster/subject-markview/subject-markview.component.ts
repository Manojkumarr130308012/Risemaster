import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl,} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-subject-markview',
  templateUrl: './subject-markview.component.html',
  styleUrls: ['./subject-markview.component.scss']
})
export class SubjectMarkviewComponent implements OnInit {
  internalForm: FormGroup;
  externalForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  institution: any;
  code: any;
  name: any;
  minMark: any;
  maxMark: any;
  markdefinitions: any;
  Id: any;
  IdValue: any;
  institutions;
  public message: string;
  userInfo: any;
  institutionValue: any;
  canId: any;
  markCode: any;
  externals: Object;
  internals: any;
  id: any;
  markId: any;
  markdefinitionsById: any;
  internalFormEdit: FormGroup;
  externalFormEdit: FormGroup;
  editForm: any;
  codeValue: any;
  nameValue: any;
  minMarkValue: any;
  maxMarkValue: any;
  institutionValue1: any;
  markDefinitionValue: any;
 
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
    })
    this.institution = new FormControl();
     // Add Form
     this.registerForm = this.formBuilder.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      minMark: ["", Validators.required],
      maxMark: ["", Validators.required],
    });
    // Add Form
    this.internalForm = this.formBuilder.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      minMark: ["", Validators.required],
      maxMark: ["", Validators.required],
    });
    this.internalFormEdit = this.formBuilder.group({
      code2: ["", Validators.required],
      name2: ["", Validators.required],
      minMark2: ["", Validators.required],
      maxMark2: ["", Validators.required],
    });
    this.externalForm = this.formBuilder.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      minMark: ["", Validators.required],
      maxMark: ["", Validators.required],
    });
    this.externalFormEdit = this.formBuilder.group({
      code2: ["", Validators.required],
      name2: ["", Validators.required],
      minMark2: ["", Validators.required],
      maxMark2: ["", Validators.required],
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

// To delete Mark Definition
onDelete(id: any) {
  this.request.deleteMarkDefinition(id).subscribe(res => {
    console.log(id);
    this.viewData(this.id);
    console.log("Deleted");
  });
}

// To edit Mark Definition
onEdit(markdefinition) {
  this.Id = markdefinition._id;
  this.request.fetchMarkDefinitionById(this.Id).subscribe(response => {
    this.editForm = response[0];
    console.log(response);
    this.institutionValue1 = this.editForm.institution;
    this.codeValue = this.editForm.code;
    this.nameValue = this.editForm.name;
    this.minMarkValue = this.editForm.minMark;
    this.maxMarkValue = this.editForm.maxMark;
    this.IdValue = this.editForm._id;

    this.registerForm = this.formBuilder.group({
      institution: [this.institutionValue1, Validators.required],
      code: [this.codeValue, Validators.required],
      name: [this.nameValue, Validators.required],
      minMark: [this.minMarkValue, Validators.required],
      maxMark: [this.maxMarkValue, Validators.required],
    });
    console.log(this.registerForm.value);
  });
}
onEditSubmit() {
  this.submitted = true;
  console.log(this.registerForm.value);
  if (this.registerForm.invalid) {
    return;
  }

  const edata = {
    institution: this.institutionValue,
    code: this.registerForm.get("code").value,
    name: this.registerForm.get("name").value,
    minMark: this.registerForm.get("minMark").value,
    maxMark: this.registerForm.get("maxMark").value,
  };

  this.request.updateMarkDefinition(this.IdValue, edata).subscribe(
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
loadModal() {
  $("#editMedicalModal").modal("hide"); //or  $('#IDModal').modal('hide');
  $("#editMedicalModal").on("hidden.bs.modal", function() {
    $(this)
      .find("form")
      .trigger("reset");
  });
}


  //Add form validation and function
  onAddInternal() {
    this.submitted = true;
    if (this.internalForm.invalid) {
      return;
    }
    //Get institution value from localstorage
    this.userInfo = localStorage.getItem('userData');
    this.userInfo = JSON.parse(this.userInfo);
    this.IdValue = this.userInfo.institution;
    this.institutionValue = this.IdValue;

    this.markId = this.id;
    let newDetail = {
      code:  this.internalForm.get('code').value,
      name: this.internalForm.get('name').value,
      minMark: this.internalForm.get('minMark').value,
      maxMark: this.internalForm.get('maxMark').value,
      institution: this.institutionValue,
      markDefinition: this.markId
    }

    this.request.addIntMarkCat(newDetail).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Added Sucessfully");
          this.loadModal1();
          this.viewInternal(this.id);
        } else if (res.status == "error") {
          swal(res.error);
        }
      },
      error => {
        swal(error);
      }
    );
    console.log(this.internalForm.value);
  }
  viewInternal(markDefinition: any) {
    if(markDefinition) {
    this.request.fetchIntMarkbymarkDef(markDefinition).subscribe((response) => {
        this.internals = response;
        console.log('Internal Mark', this.internals);
      }, (error) => {
        console.log(error);
      });
    } else
       this.externals = null;
  }
// To delete Mark Definition
onDeleteInternal(id: any) {
  this.request.deleteIntMarkCat(id).subscribe(res => {
    console.log(id);
    this.viewInternal(this.id);
    console.log("Deleted");
  });
}

// To edit Mark Definition
onEditInternal(internalMark) {
  this.Id = internalMark._id;
  this.request.fetchIntMarkCatById(this.Id).subscribe(response => {
    this.editForm = response[0];
    console.log(response);
    this.institutionValue1 = this.editForm.institution;
    this.markDefinitionValue= this.editForm.markDefinition;
    this.codeValue = this.editForm.code;
    this.nameValue = this.editForm.name;
    this.minMarkValue = this.editForm.minMark;
    this.maxMarkValue = this.editForm.maxMark;
    this.IdValue = this.editForm._id;

    this.internalFormEdit = this.formBuilder.group({
      institution2: [this.institutionValue1, Validators.required],
      markDefinition2: [this.markDefinitionValue, Validators.required],
      code2: [this.codeValue, Validators.required],
      name2: [this.nameValue, Validators.required],
      minMark2: [this.minMarkValue, Validators.required],
      maxMark2: [this.maxMarkValue, Validators.required],
    });
    console.log(this.internalFormEdit.value);
  });
}
updateInternal() {
  this.submitted = true;
  console.log(this.internalFormEdit.value);
  if (this.internalFormEdit.invalid) {
    return;
  }

  const edata = {
    institution: this.institutionValue,
    markDefinition: this.markId,
    code: this.internalFormEdit.get("code2").value,
    name: this.internalFormEdit.get("name2").value,
    minMark: this.internalFormEdit.get("minMark2").value,
    maxMark: this.internalFormEdit.get("maxMark2").value,
  };

  this.request.updateIntMarkCat(this.IdValue, edata).subscribe(
    (res: any) => {
      if (res.status == "success") {
        swal("Updated Sucessfully");
        this.loadModal1();
        this.viewInternal(this.id);
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
loadModal1() {
  $("#editinternalModal").modal("hide"); //or  $('#IDModal').modal('hide');
  $("#editinternalModal").on("hidden.bs.modal", function() {
    $(this)
      .find("form")
      .trigger("reset");
  });
  $("#addInternalModal").modal("hide"); //or  $('#IDModal').modal('hide');
  $("#addInternalModal").on("hidden.bs.modal", function() {
    $(this)
      .find("form")
      .trigger("reset");
  });
}
  
  //Add form validation and function
  onAddExternal() {
    this.submitted = true;
    if (this.externalForm.invalid) {
      return;
    }
    //Get institution value from localstorage
    this.userInfo = localStorage.getItem('userData');
    this.userInfo = JSON.parse(this.userInfo);
    this.IdValue = this.userInfo.institution;
    this.institutionValue = this.IdValue;

    this.markId = this.id;
    let newDetail = {
      code:  this.externalForm.get('code').value,
      name: this.externalForm.get('name').value,
      minMark: this.externalForm.get('minMark').value,
      maxMark: this.externalForm.get('maxMark').value,
      institution: this.institutionValue,
      markDefinition: this.markId
    }

    this.request.addExtMarkCat(newDetail).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Added Sucessfully");
          this.loadModal2();
          this.viewExternal(this.id);
        } else if (res.status == "error") {
          swal(res.error);
        }
      },
      error => {
        swal(error);
      }
    );
    console.log(this.externalForm.value);
  }
  // To display Subject Type

  viewExternal(markDefinition: any) {
    if(markDefinition) {
    this.request.fetchExtMarkbymarkDef(markDefinition).subscribe((response) => {
        this.externals = response;
        console.log('External Mark', this.externals);
      }, (error) => {
        console.log(error);
      });
    } else
       this.externals = null;
  }
  // To delete Mark Definition
onDeleteExternal(id: any) {
  this.request.deleteExtMarkCat(id).subscribe(res => {
    console.log(id);
    this.viewExternal(this.id);
    console.log("Deleted");
  });
}

// To edit Mark Definition
onEditExternal(externalMark) {
  this.Id = externalMark._id;
  this.request.fetchExtMarkCatById(this.Id).subscribe(response => {
    this.editForm = response[0];
    console.log(response);
    this.institutionValue1 = this.editForm.institution;
    this.markDefinitionValue= this.editForm.markDefinition;
    this.codeValue = this.editForm.code;
    this.nameValue = this.editForm.name;
    this.minMarkValue = this.editForm.minMark;
    this.maxMarkValue = this.editForm.maxMark;
    this.IdValue = this.editForm._id;

    this.externalFormEdit = this.formBuilder.group({
      institution2: [this.institutionValue1, Validators.required],
      markDefinition2: [this.markDefinitionValue, Validators.required],
      code2: [this.codeValue, Validators.required],
      name2: [this.nameValue, Validators.required],
      minMark2: [this.minMarkValue, Validators.required],
      maxMark2: [this.maxMarkValue, Validators.required],
    });
    console.log(this.externalFormEdit.value);
  });
}
updateExternal() {
  this.submitted = true;
  console.log(this.externalFormEdit.value);
  if (this.externalFormEdit.invalid) {
    return;
  }

  const edata = {
    institution: this.institutionValue,
    markDefinition: this.markId,
    code: this.externalFormEdit.get("code2").value,
    name: this.externalFormEdit.get("name2").value,
    minMark: this.externalFormEdit.get("minMark2").value,
    maxMark: this.externalFormEdit.get("maxMark2").value,
  };

  this.request.updateExtMarkCat(this.IdValue, edata).subscribe(
    (res: any) => {
      if (res.status == "success") {
        swal("Updated Sucessfully");
        this.loadModal2();
        this.viewExternal(this.id);
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
loadModal2() {
  $("#editexternalModal").modal("hide"); //or  $('#IDModal').modal('hide');
  $("#editexternalModal").on("hidden.bs.modal", function() {
    $(this)
      .find("form")
      .trigger("reset");
  });
  $("#addExternalModal").modal("hide"); //or  $('#IDModal').modal('hide');
  $("#addExternalModal").on("hidden.bs.modal", function() {
    $(this)
      .find("form")
      .trigger("reset");
  });
}
  
  viewData(id: any) {
    this.request.fetchMarkDefinitionById(id).subscribe(
      response => {
        this.markdefinitionsById = response;
        console.log('markdefinitionsById', this.markdefinitionsById);
      },
      error => {
        console.log(error);
      }
    );
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.internalForm.controls;
  }
  get f2() {
    return this.externalForm.controls;
  }
  get f3() {
    return this.registerForm.controls;
  }
  get e1() {
    return this.internalFormEdit.controls;
  }
  get e2() {
    return this.externalFormEdit.controls;
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

  ngOnInit() {
    //this.auth.isValidUser();
    this.startScript();
    this.viewExternal(this.id);
    this.viewInternal(this.id);
    this.loadInstitution();
    this.viewData(this.id);
  }
}
