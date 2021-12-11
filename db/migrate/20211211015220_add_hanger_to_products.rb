class AddHangerToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :hanger, :string
  end
end
