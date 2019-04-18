import { NgModule } from '@angular/core'
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatExpansionModule,
    MatSnackBarModule, MatProgressSpinnerModule, MatCardModule, MatGridListModule, MatSlideToggleModule,
    MatMenuModule, MatIconModule, MatToolbarModule, MatTooltipModule, MatTableModule, MatCheckboxModule,
    MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatSelectModule,
    MatNativeDateModule, MatDividerModule, MatTabsModule, MatListModule, MatDialogModule
} from '@angular/material'

@NgModule({
    imports: [
        MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatSlideToggleModule,
        MatSnackBarModule, MatProgressSpinnerModule, MatCardModule, MatGridListModule, MatCheckboxModule,
        MatMenuModule, MatIconModule, MatToolbarModule, MatTooltipModule, MatSelectModule, MatExpansionModule,
        MatTableModule, MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule,
        MatNativeDateModule, MatDividerModule, MatTabsModule, MatListModule, MatDialogModule
    ],
    exports: [
        MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatSlideToggleModule,
        MatSnackBarModule, MatProgressSpinnerModule, MatCardModule, MatGridListModule, MatCheckboxModule,
        MatMenuModule, MatIconModule, MatToolbarModule, MatTooltipModule, MatSelectModule, MatExpansionModule,
        MatTableModule, MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule,
        MatNativeDateModule, MatDividerModule, MatTabsModule, MatListModule, MatDialogModule
    ]
})

export class MaterialModule {}
