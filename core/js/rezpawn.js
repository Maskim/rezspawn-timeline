(function($)
{
	var today = new Date();

	$.fn.rezTimeline = function(params){

		//VARIABLES
		var $this = $(this);
		var $abscisse;
		var timelineWidth;

		//BOARD
		initTimeline();

		/**
		 ** Generate timeline elements
		 */
		function initTimeline(){

			var abscisse = document.createElement("div");
			abscisse.className = "rez-abscisse-container";

			(function(){
				var line = document.createElement("div");
				line.className = "rez-abscisse";

				(function(){
					var today_abs = document.createElement("div");
					today_abs.className = "rez-abs rez-abs-today";
					today_abs = create_attribute(today_abs, "data-year", today.getFullYear());

					line.appendChild(today_abs);
				}());

				abscisse.appendChild(line);
			}());

			$this.append(abscisse);

			//UPDATES VARIBLES
			$abscisse = $(".rez-abscisse");
			$today = $(".rez-abs-today");
			timelineWidth = parseInt($abscisse.width());


			//UPDATES PLACEMENT
			(function(){
				var today_placement = timelineWidth * 95 / 100;
				console.log(today_placement);

				$today.css({
					"left": today_placement
				});

			}());
		}

	};//END rezTimeline

	/**
	 ** Create html attributes to an DOM element
	 ** target : DOM element to add attribute
	 ** name (String) : the attribute name like data-name
	 ** value (String) : the content of the attribute name
	 **/
	function create_attribute(target, name, value){
    	var attribute = document.createAttribute(name);
			attribute.nodeValue = value;

			target.setAttributeNode(attribute);

			return target;
    }

	//DEFINE DEFAULT PARAMS OF THE PLUGIN
	$.fn.rezTimeline.defaultParams = {

	};

}(jQuery))