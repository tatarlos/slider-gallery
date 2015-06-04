(function($){


	$.fn.sliderGallery =function(){

		return this.each(function(){

			var 
				$this = $(this),
				$images = $this.find('.images img'),
				$thumbs = $this.find('.thumbs img'),
				$mask = $this.find('.images'),
				$nextBtn = $this.find('.next-btn'),
				$prevBtn = $this.find('.prev-btn'),
				$slider,
				delay = 4000, 
				numOfImgs = $images.length,
				currentIndex = 0,
				timeout,
				lastIndex = numOfImgs - 1;

			//intialise
			//wrap the images in a slider
			$images.wrapAll('<div class = "slider ">');
			$slider = $this.find('.slider');
			//set slider & image width
			$slider.width(100*numOfImgs+"%").css({'transition': "all 1s"});
			$images.width(100/numOfImgs+"%");
			$mask.css({'overflow': "hidden"});
			//set inital selected states
			$thumbs.eq(currentIndex).addClass('selected');
			timeout = setTimeout(nextImage ,delay);



			function animate(newIndex){
				clearTimeout(timeout);
				$thumbs.eq(currentIndex).removeClass('selected');
				currentIndex = newIndex;
				$thumbs.eq(currentIndex).addClass('selected');
				$slider.css({'margin-left': -currentIndex*100+"%"});
				timeout = setTimeout(nextImage, delay);
			}

			function nextImage(){
				(currentIndex<lastIndex)? animate(currentIndex+1):animate(0);
			}

			$thumbs.click(function(){
				animate($thumbs.index(this));
			});

			$nextBtn.click(nextImage);

			$prevBtn.click(function(){				
				(currentIndex>0)? animate(currentIndex-1):animate(lastIndex);
			});

		})
	}

})(jQuery)



