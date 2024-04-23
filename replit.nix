{ pkgs }: {
	deps = with pkgs; [
   pkgs.esbuild
		nodejs-16_x
		nodePackages.typescript-language-server
	];
}
