import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {

  constructor(
    public db: DataService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  removeProductFromWhishlist(prdIdx: number) {
    let elements = this.db.whishlistProducts.splice(prdIdx, 1);
    this.toast.info(elements[0]['title'], "Product Removed from Whishlist");
  }
}
