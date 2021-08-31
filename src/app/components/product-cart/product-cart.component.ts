import { Component, Input, OnInit } from '@angular/core';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css'],
})
export class ProductCartComponent implements OnInit {
  @Input() cartItems?: any[];
  totalPrice = 0;
  item: any;
  constructor(private modalService: NgbModal) {}
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.cartItems?.forEach((item) => {
      this.item = item;
      this.totalPrice += this.item.price;
    });
  }

  ngOnInit(): void {}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}
