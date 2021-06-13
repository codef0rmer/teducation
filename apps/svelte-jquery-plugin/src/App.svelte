<script lang="ts">
	let position = 'bottom';

	export function toolbar(node: Node, toolbarOptions: any): unknown {
		(jQuery(node) as any).toolbar(toolbarOptions);
    
		return {
			update(toolbarOptions) {
				(jQuery(node) as any).unbind();
				jQuery('.tool-container').remove();
				(jQuery(node) as any).toolbar(toolbarOptions);
			},
			destroy() {
				// run destroy method from jquery plugin if any
				jQuery('.tool-container').remove();
			}
		};
	}
</script>

<main>
  <h1>Hover over the cog below <button on:click={() => position = 'right'}>Change Tooltip Position</button></h1>
  <div use:toolbar={{ position, style: 'primary', animation: 'flip', content: '#toolbarOptions' }} class="btn-toolbar"><i class="fa fa-cog"></i></div>
  <div id="toolbarOptions" class="toolbar-icons hidden">
    <a href="/"><i class="fa fa-android"></i></a>
    <a href="/"><i class="fa fa-apple"></i></a>
    <a href="/"><i class="fa fa-twitter"></i></a>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-toolbar {
    width: 50px;
    height: 50px;

    .fa.fa-cog {
      font-size: 50px;
    }
  }
</style>
