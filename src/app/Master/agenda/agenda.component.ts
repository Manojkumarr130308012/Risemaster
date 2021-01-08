import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const M: any;
declare const swal: any;
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  addBatchForm: any;
  editForm: any;
  message: any;
  submitted = false;
  batches: Object;
  public speaker1: any;
  public speaker12: any;
  public speaker2: any;
  public speaker22: any;
  public agenda: any;
  public agenda2: any;
  public venue: any;
  public venue2: any;
  public date: any;
  public date2: any;
  public time: any;
  public time2: any;
  speaker1Value: any;
  speaker2Value:any;
  speaker1s;
  speaker2s;
  IdValue: any;
  amount: any;
  amount2: any;
  validity:any;
  validity2:any;
  Id: any;
  editBatch: any;
  agendaValue: any;
  agendaNames: any;
  venueValue: any;
  venueNames: any;
  dateValue: any;
  dateNames: any;
  timeValue: any;
  timeNames: any;
  validityValue:any;
  trackid:any;
eventid:any;
agendas:any;
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private route: ActivatedRoute,
    private auth: AuthService) {

      this.route.queryParams.subscribe((params: any) => {
        this.trackid = params.trackid;
        this.eventid = params.eventid;
      })
      // Add Form
    this.addBatchForm = this.formBuilder.group({
      date: ["", Validators.required],
      time: ["", Validators.required],
      agenda: ["", Validators.required],
      speaker1: ["", Validators.required],
      speaker2: ["", Validators.required],
      venue: ["", Validators.required],
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      date2: ["", Validators.required],
      time2: ["", Validators.required],
      agenda2: ["", Validators.required],
      speaker12: ["", Validators.required],
      speaker22: ["", Validators.required],
      venue2: ["", Validators.required],
    });

     }
     public setMessage(message) {
      return (this.message = message);
    }

    loadspeaker() {
      this.request.getspeaker().subscribe((response: any) => {
        this.speaker1s = response;
        console.log('speaker1s',this.speaker1s);
      }, (error) => {
        console.log(error);
      });
    }

    //Add form validation and function
    onAddSubmit() {
      this.submitted = true;
      if (this.addBatchForm.invalid) {
        return;
      }

      const edata1 = {
        event:this.eventid,
        track:this.trackid,
        speaker1: this.addBatchForm.get("speaker1").value,
        speaker2: this.addBatchForm.get("speaker2").value,
        date: this.addBatchForm.get("date").value,
        time: this.addBatchForm.get("time").value,
        venue: this.addBatchForm.get("venue").value,
        agenda: this.addBatchForm.get("agenda").value,
      };
      this.request.addagendas(edata1).subscribe(
        (res: any) => {
          if (res.status == "success") {
           this.loadModal();
            this.viewData();
            swal("Added Sucessfully");
          } else if (res.status == "error") {
            swal(res.error);
          }
        },
        error => {
          swal(error);
        }
      );
      console.log(this.addBatchForm.value);
    }

    // To display course category
    viewData() {
      this.request.getagendasaggregion(this.eventid,this.trackid).subscribe(
        response => {
          this.agendas = response;
          console.log("agendas",this.agendas);
        },
        error => {
          console.log(error);
        }
      );
    }

    // To delete course category
    deleteBatch(id: any) {
      this.request.deleteagendas(id).subscribe(res => {
        console.log(id);
        this.viewData();
        console.log("Deleted");
      });
    }

    // To edit course category
    onEdit(city) {
      this.Id = city._id;
      // this.countryId = city.CountryDetails[0]._id;
      // this.loadcountryIns(this.countryId);
      this.request.fetchagendasById(this.Id).subscribe(response => {
        this.editBatch = response[0];
        console.log(response);
        this.speaker1Value = this.editBatch.speaker1;
        this.speaker2Value = this.editBatch.speaker2;
        this.dateValue = this.editBatch.date;
        this.timeValue = this.editBatch.time;
        this.agendaValue = this.editBatch.agenda;
        this.venueValue = this.editBatch.venue;
        this.IdValue = this.editBatch._id;

        this.editForm = this.formBuilder.group({
          speaker12: [this.speaker1Value, Validators.required],
          speaker22: [this.speaker2Value, Validators.required],
          date2: [this.dateValue, Validators.required],
          time2: [this.timeValue, Validators.required],
          venue2: [this.venueValue, Validators.required],
          agenda2: [this.agendaValue, Validators.required]
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

      const edata1 = {
        event:this.eventid,
        track:this.trackid,
        speaker1: this.editForm.get("speaker12").value,
        speaker2: this.editForm.get("speaker22").value,
        date: this.editForm.get("date2").value,
        time: this.editForm.get("time2").value,
        venue: this.editForm.get("venue2").value,
        agenda: this.editForm.get("agenda2").value,
      };

      this.request.updateagendas(this.IdValue, edata1).subscribe(
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
    // loadcountryIns(Country) {
    //   this.request.loadcountrybyins(Country).subscribe((response: any) => {
    //     this.countrybyins = response;
    //     console.log('countrybyins', this.countrybyins);
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }
  // Bind institution data
  loadspeaker1() {
    this.request.getspeaker().subscribe((response: any) => {
      this.speaker2s = response;
      console.log('speaker2s', this.speaker2s);
    }, (error) => {
      console.log(error);
    });
  }
  // Bind coursecategory data
  // onCountryChange(Country: string) {
  //   console.log('Country', Country);
  //   if (Country) {
  //      this.request.loadcountrybyins(Country).subscribe((response: any) => {
  //        console.log(response);
  //        this.countrybyins = response;
  //        console.log('countrybyins', this.countrybyins);
  //      }, (error) => {
  //        console.log(error);
  //      });

  //    } else

  //      this.countrybyins = null;
  //   }
    // convenience getter for easy access to form fields
    get f() {
      return this.addBatchForm.controls;
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
      //this.auth.isValidUser();
      this.startScript();
      M.updateTextFields();
      this.viewData();
      this.loadModal();
      this.loadspeaker();
      this.loadspeaker1();
    }
  }
