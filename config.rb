http_path		= "../"
css_dir 		= "core/css"
sass_dir 		= "core/scss"
images_dir 		= "core/images"
javascripts_dir = "core/js"
fonts_dir		= 'core/fonts'

	environment = :development
#	environment = :production

if  environment == :production
	output_style = :compressed
else
	output_style = :expanded
	sass_options = { :debug_info => true }
end