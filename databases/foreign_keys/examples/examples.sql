--Get products which is not exist in any warehouse
select * from products WHERE id in (
      select product_id from (
  		select product_id, SUM( amount ) as sum_of_products from stocks GROUP BY product_id
	) n1 WHERE sum_of_products = 0
)


--Get order of products by DESC
select products.id, n1.sum_of_products from products LEFT JOIN
	( select product_id, warehouse_id, SUM( amount ) as sum_of_products 
     	FROM stocks 
     		GROUP BY product_id, warehouse_id ) n1 ON products.id = n1.product_id ORDER BY n1.sum_of_products DESC NULLS LAST


--Create view for order of products by DESC
CREATE VIEW products_stat AS select products.id, n1.sum_of_products from products LEFT JOIN
	( select product_id, warehouse_id, SUM( amount ) as sum_of_products 
     	FROM stocks 
     		GROUP BY product_id, warehouse_id ) n1 ON products.id = n1.product_id ORDER BY n1.sum_of_products DESC NULLS LAST