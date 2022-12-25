class CreateImageBlobs < ActiveRecord::Migration[6.1]
  def change
    create_table :image_blobs do |t|

      t.timestamps
    end
  end
end
