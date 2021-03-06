import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';

interface CurrentSelectedOptionsType {
  [key: string]: String;
};

@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss']
})
export class ProductVariantsComponent implements OnInit {
  @Input() customOptionTypesHash: any;
  @Input() currentSelectedOptions = {};
  @Output() onOptionClickEvent = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  onOptionClick(option) {
    this.onOptionClickEvent.emit(option);
  }
}
