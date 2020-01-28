import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  title = 'Character Details';
  character: any;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.character = this.charactersService.getCharacterById(id);
  }

  onBack(): void {
    this.router.navigate(['/characters']);
  }

}
