closure-library/closure/bin/build/closurebuilder.py \
  --namespace "myproject.start" \
  --root . \
  --output_mode=compiled \
  --compiler_jar=compiler.jar \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  > hello-compiled.js
