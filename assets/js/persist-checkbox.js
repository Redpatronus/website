{{ $script := resources.Get "/js/persist-checkbox.js" | minify }}
<script src="{{ $script.RelPermalink }}"></script>