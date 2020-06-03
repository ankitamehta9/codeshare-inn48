import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/_services/campaign.service';
import { FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
import { Campaign } from 'src/app/_models/Campaign';
import { Audience } from 'src/app/_models/Audience';
import { ITEMCATEGORY } from '../../_models/sampledata';
import { AUDIENCE } from '../../_models/sampledata';
import { ItemCategory } from 'src/app/_models/ItemCategory';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-campaign',
  templateUrl: './postcampaign.component.html',
  styleUrls: ['./postcampaign.component.css']
})
export class PostCampaignComponent implements OnInit {
  postCampaign: FormGroup;
  campaign: Campaign;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;

  itemcategories = ITEMCATEGORY;
  audienceList = AUDIENCE;
  selectedItemCategories: ItemCategory[];
  selectedAudience: Audience[];
  settings: any = {};

  constructor(private campaignService: CampaignService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.selectedItemCategories = [
      { id: 11, code: 'C11', name: 'Clothes', desc: 'Clothes' },
      { id: 21, code: 'C21', name: 'Food', desc: 'Food' }
    ];

    this.settings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };

    this.postCampaign = this.formBuilder.group({
      title: [''],
      description: [''],
      giftCategories: [this.selectedItemCategories],
      audience: [this.selectedAudience],
      giftLimit: [''],
      startDate: [''],
      endDate: ['']
    });

  }

  createCampaign() {
    this.campaign = new Campaign(this.postCampaign.value);
    this.campaignService.createCampaign(this.campaign)
      .subscribe()
      ;

  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }

  onAudienceSelect(audience: any) {
    console.log('onAudienceSelect', audience);
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }





 
 
}
