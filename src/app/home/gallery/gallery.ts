import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit {
  currentPage = 1;

  pages = [
    {
      id: 1,
      images: [
        '/assets/img/gallery/1.jpg',
        '/assets/img/gallery/2.jpg',
        'assets/img/gallery/3.jpg',
        '/assets/img/gallery/4.jpg',
        '/assets/img/gallery/5.jpg',
        'assets/img/gallery/6.jpg',
        '/assets/img/gallery/7.jpg',
        '/assets/img/gallery/8.jpg',
        'assets/img/gallery/9.jpg',
        'assets/img/gallery/10.jpg',
      ],
    },
    {
      id: 2,
      images: [
        '/assets/img/gallery/11.jpg',
        '/assets/img/gallery/12.jpg',
        'assets/img/gallery/13.jpg',
        '/assets/img/gallery/14.jpg',
        '/assets/img/gallery/15.jpg',
        'assets/img/gallery/16.jpg',
        '/assets/img/gallery/17.jpg',
        '/assets/img/gallery/18.jpg',
        'assets/img/gallery/19.jpg',
        'assets/img/gallery/20.jpg',
      ],
    },
    {
      id: 3,
      images: [
        '/assets/img/gallery/21.jpg',
        '/assets/img/gallery/22.jpg',
        'assets/img/gallery/23.jpg',
        '/assets/img/gallery/24.jpg',
        '/assets/img/gallery/25.jpg',
        'assets/img/gallery/26.jpg',
        '/assets/img/gallery/27.jpg',
        '/assets/img/gallery/28.jpg',
        'assets/img/gallery/29.jpg',
        'assets/img/gallery/30.jpg',
      ],
    },
    {
      id: 4,
      images: [
        '/assets/img/gallery/31.jpg',
        '/assets/img/gallery/32.jpg',
        'assets/img/gallery/33.jpg',
        '/assets/img/gallery/34.jpg',
        '/assets/img/gallery/35.jpg',
        'assets/img/gallery/36.jpg',
        '/assets/img/gallery/37.jpg',
        '/assets/img/gallery/38.jpg',
        'assets/img/gallery/39.jpg',
        'assets/img/gallery/40.jpg',
      ],
    },
    {
      id: 5,
      images: [
        '/assets/img/gallery/41.jpg',
        '/assets/img/gallery/42.jpg',
        'assets/img/gallery/43.jpg',
        '/assets/img/gallery/44.jpg',
        '/assets/img/gallery/45.jpg',
        'assets/img/gallery/46.jpg',
        '/assets/img/gallery/47.jpg',
        '/assets/img/gallery/48.jpg',
        'assets/img/gallery/49.jpg',
        'assets/img/gallery/50.jpg',
      ],
    },
    {
      id: 6,
      images: [
        '/assets/img/gallery/51.jpg',
        '/assets/img/gallery/52.jpg',
        'assets/img/gallery/53.jpg',
        '/assets/img/gallery/54.jpg',
        '/assets/img/gallery/55.jpg',
        'assets/img/gallery/56.jpg',
        '/assets/img/gallery/57.jpg',
        '/assets/img/gallery/58.jpg',
        'assets/img/gallery/59.jpg',
        'assets/img/gallery/60.jpg',
      ],
    },
    {
      id: 7,
      images: [
        '/assets/img/gallery/61.jpg',
        '/assets/img/gallery/62.jpg',
        'assets/img/gallery/63.jpg',
        '/assets/img/gallery/64.jpg',
        '/assets/img/gallery/65.jpg',
        'assets/img/gallery/66.jpg',
        '/assets/img/gallery/67.jpg',
        '/assets/img/gallery/68.jpg',
        'assets/img/gallery/69.jpg',
        'assets/img/gallery/70.jpg',
      ],
    },
    {
      id: 8,
      images: [
        '/assets/img/gallery/71.jpg',
        '/assets/img/gallery/72.jpg',
        'assets/img/gallery/73.jpg',
        '/assets/img/gallery/74.jpg',
        '/assets/img/gallery/75.jpg',
        'assets/img/gallery/76.jpg',
        '/assets/img/gallery/77.jpg',
        '/assets/img/gallery/78.jpg',
        'assets/img/gallery/79.jpg',
        'assets/img/gallery/80.jpg',
      ],
    },
    {
      id: 9,
      images: [
        '/assets/img/gallery/81.jpg',
        '/assets/img/gallery/82.jpg',
        'assets/img/gallery/83.jpg',
        '/assets/img/gallery/84.jpg',
        '/assets/img/gallery/85.jpg',
        'assets/img/gallery/86.jpg',
        '/assets/img/gallery/87.jpg',
        '/assets/img/gallery/88.jpg',
        'assets/img/gallery/89.jpg',
        'assets/img/gallery/90.jpg',
      ],
    },
    {
      id: 10,
      images: [
        '/assets/img/gallery/91.jpg',
        '/assets/img/gallery/92.jpg',
        'assets/img/gallery/93.jpg',
        '/assets/img/gallery/94.jpg',
        '/assets/img/gallery/95.jpg',
        'assets/img/gallery/96.jpg',
        '/assets/img/gallery/97.jpg',
        '/assets/img/gallery/98.jpg',
        'assets/img/gallery/99.jpg',
        'assets/img/gallery/100.jpg',
      ],
    },
    {
      id: 11,
      images: [
        '/assets/img/gallery/101.jpg',
        '/assets/img/gallery/102.jpg',
        'assets/img/gallery/103.jpg',
        '/assets/img/gallery/104.jpg',
        '/assets/img/gallery/105.jpg',
        'assets/img/gallery/106.jpg',
        '/assets/img/gallery/107.jpg',
        '/assets/img/gallery/108.jpg',
        'assets/img/gallery/109.jpg',
        'assets/img/gallery/110.jpg',
      ],
    },
    {
      id: 12,
      images: [
        '/assets/img/gallery/111.jpg',
        '/assets/img/gallery/112.jpg',
        'assets/img/gallery/113.jpg',
        '/assets/img/gallery/114.jpg',
        '/assets/img/gallery/115.jpg',
        'assets/img/gallery/116.jpg',
        '/assets/img/gallery/117.jpg',
        '/assets/img/gallery/118.jpg',
        'assets/img/gallery/119.jpg',
        'assets/img/gallery/120.jpg',
      ],
    },
    {
      id: 13,
      images: [
        '/assets/img/gallery/121.jpg',
        '/assets/img/gallery/122.jpg',
        'assets/img/gallery/123.jpg',
        '/assets/img/gallery/124.jpg',
        '/assets/img/gallery/125.jpg',
        'assets/img/gallery/126.jpg',
        '/assets/img/gallery/127.jpg',
        '/assets/img/gallery/128.jpg',
        'assets/img/gallery/129.jpg',
        'assets/img/gallery/130.jpg',
      ],
    },
    {
      id: 14,
      images: [
        '/assets/img/gallery/131.jpg',
        '/assets/img/gallery/132.jpg',
        'assets/img/gallery/133.jpg',
        '/assets/img/gallery/134.jpg',
        '/assets/img/gallery/135.jpg',
        'assets/img/gallery/136.jpg',
        '/assets/img/gallery/137.jpg',
        '/assets/img/gallery/138.jpg',
        'assets/img/gallery/139.jpg',
        'assets/img/gallery/140.jpg',
      ],
    },
    {
      id: 15,
      images: [
        '/assets/img/gallery/141.jpg',
        '/assets/img/gallery/142.jpg',
        'assets/img/gallery/143.jpg',
        '/assets/img/gallery/144.jpg',
        '/assets/img/gallery/145.jpg',
        'assets/img/gallery/146.jpg',
        '/assets/img/gallery/147.jpg',
        '/assets/img/gallery/148.jpg',
        'assets/img/gallery/149.jpg',
        'assets/img/gallery/150.jpg',
      ],
    },
    {
      id: 16,
      images: [
        '/assets/img/gallery/151.jpg',
        '/assets/img/gallery/152.jpg',
        'assets/img/gallery/153.jpg',
        '/assets/img/gallery/154.jpg',
        '/assets/img/gallery/155.jpg',
        'assets/img/gallery/156.jpg',
        '/assets/img/gallery/157.jpg',
        '/assets/img/gallery/158.jpg',
        'assets/img/gallery/159.jpg',
        'assets/img/gallery/160.jpg',
      ],
    },
    {
      id: 17,
      images: [
        '/assets/img/gallery/161.jpg',
        '/assets/img/gallery/162.jpg',
        'assets/img/gallery/163.jpg',
        '/assets/img/gallery/164.jpg',
        '/assets/img/gallery/165.jpg',
        'assets/img/gallery/166.jpg',
        '/assets/img/gallery/167.jpg',
        '/assets/img/gallery/168.jpg',
        // 'assets/img/gallery/169.jpg',
        // 'assets/img/gallery/170.jpg',
      ],
    },
    
    // more pages...
  ];
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const pageParam = Number(params.get('page'));
      if (pageParam && pageParam >= 1 && pageParam <= this.pages.length) {
        this.currentPage = pageParam;
      } else {
        this.router.navigate(['/gallery', 1]);
      }
    });
  }
  get currentImages() {
    return this.pages.find((p) => p.id === this.currentPage)?.images || [];
  }

  totalPages() {
    return this.pages.length;
  }

  pageChanged(page: number) {
    this.router.navigate(['/gallery', page]);
  }
}
