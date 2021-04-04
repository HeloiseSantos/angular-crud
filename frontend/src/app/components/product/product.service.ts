import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg:string): void {
    this.snackBar.open(msg, 'OK', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: "show-message"
    })
  }
}
