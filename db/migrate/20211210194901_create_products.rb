class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :item
      t.string :type
      t.integer :price
      t.string :description
      t.string :img

      t.timestamps
    end
  end
end
