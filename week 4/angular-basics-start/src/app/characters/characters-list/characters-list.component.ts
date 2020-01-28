import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters-list.component.html',
    styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
    title = 'Characters List';
    imageWidth = '50';
    imageMargin = '2';
    showImage = false;
    characters: any[] = [];
    filteredCharacters: any[];

    private _listFilter: string;

    constructor(private charactersService: CharactersService) {
    }

    ngOnInit(): void {
        this.charactersService.getCharacters().subscribe((data: any[]) => {
            this.characters = data;
            this.filteredCharacters = this.characters;
        });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): any[] {
        filterBy = filterBy.toLowerCase();
        return this.characters.filter((c: any) => {
            return c.name.toLowerCase().includes(filterBy);
        });
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCharacters = this.listFilter ? this.performFilter(this.listFilter) : this.characters;
    }

    onBarClicked(value: string): void {
        console.log(value);
    }
}
